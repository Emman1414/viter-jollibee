import { StoreContext } from "@/components/store/storeContext";
import { ImagePlusIcon, X } from "lucide-react";
import React from "react";
import ModalWrapper from "../partials/modals/ModalWrapper";
import SpinnerButton from "../partials/spinners/SpinnerButton";

import useQueryData from "@/components/custom-hook/useQueryData";
import useUploadPhoto from "@/components/custom-hook/useUploadPhoto";
import { InputPhotoUpload, InputSelect, InputText } from "@/components/helpers/FormInputs";
import { Form, Formik } from "formik";
import * as Yup from "Yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "@/components/helpers/queryData";
import { setError, setIsAdd, setMessage, setSuccess } from "@/components/store/storeAction";
import { imgPath } from "@/components/helpers/functions-general";

const ModalAddFood = ({ itemEdit }) => {
  const { dispatch } = React.useContext(StoreContext);
  const [value, setValue] = React.useState("");
  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto("/v2/upload-photo");

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const {
    isFetching,
    error,
    status,
    data: categ,
  } = useQueryData(
    `/v2/category`, // endpoint
    "get", // method
    "category" // key
  );

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v2/food/${itemEdit.food_aid}`
          : "/v2/food",
        itemEdit ? "PUT" : "POST",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["food"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        console.log("Success");
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage("Successful!"));
      }
    },
  });

  const initVal = {
    food_image: itemEdit ? itemEdit.food_image : "",
    food_title: itemEdit ? itemEdit.food_title : "",
    food_price: itemEdit ? itemEdit.food_price : "",
    food_category_id: itemEdit ? itemEdit.food_category_id : "",
  };

  const yupSchema = Yup.object({
    food_title: Yup.string().required("Required"),
    food_price: Yup.string().required("Required"),
    food_category_id: Yup.string().required("Required"),
  });



  return (
    <>
      <ModalWrapper>
        <div className="modal-side absolute top-0 right-0 bg-primary h-[100dvh] w-[300px] border-l border-line">
          <div className="modal-header p-4 flex justify-between items-center">
            <h5 className="mb-0">Add food</h5>
            <button onClick={handleClose}>
              <X />
            </button>
          </div>

          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              mutation.mutate({
                ...values,
                food_image:
                  (itemEdit?.food_image === "" && photo) ||
                  (!photo && "") ||
                  (photo === undefined && "") ||
                  (photo && itemEdit?.food_image !== photo?.name)
                    ? photo?.name || ""
                    : itemEdit?.food_image || "",
              });
              uploadPhoto();
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="modal-form h-full max-h-[calc(100vh-56px)] grid grid-rows-[1fr_auto]">
                    <div className="form-wrapper p-4 max-h-[85vh] h-full overflow-y-auto custom-scroll">
                      <div className="input-wrap">
                        <InputText
                          label="Title"
                          type="text"
                          name="food_title"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="input-wrap relative  group input-photo-wrap h-[150px] ">
                        <label htmlFor="">Photo</label>
                        {itemEdit === null && photo === null ? (
                          <div className="w-full border border-line rounded-md flex justify-center items-center flex-col h-full">
                            <ImagePlusIcon
                              size={50}
                              strokeWidth={1}
                              className="opacity-20 group-hover:opacity-50 transition-opacity"
                            />
                            <small className="opacity-20 group-hover:opacity-50 transition-opacity">
                              Upload Photo
                            </small>
                          </div>
                        ) : (
                          <img
                            src={
                              photo
                                ? URL.createObjectURL(photo) // preview
                                : imgPath + "/" + itemEdit?.food_image // check db
                            }
                            alt="food photo"
                            className={`group-hover:opacity-30 duration-200 relative object-cover h-full w-full  m-auto `}
                          />
                        )}
                        <InputPhotoUpload
                          name="photo"
                          type="file"
                          id="photo"
                          accept="image/*"
                          title="Upload photo"
                          onChange={(e) => handleChangePhoto(e)}
                          onDrop={(e) => handleChangePhoto(e)}
                          className={`opacity-0 absolute top-0 right-0 bottom-0 left-0 rounded-full  m-auto cursor-pointer w-full h-full ${
                            mutation.isPending ? "pointer-events-none" : ""
                          }`}
                        />
                      </div>

                      <div className="input-wrap mt-8">
                        <InputText
                          label="Price"
                          type="text"
                          name="food_price"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="input-wrap">
                        <InputSelect
                          label="Food Category"
                          name="food_category_id"
                          onChange={handleChange}
                        >
                          <option value="" hidden></option>
                          {categ?.data.map((item, key) => { 
                            return (
                              <React.Fragment key={key} >
                                {item.category_is_active === 1 && (
                                  <option key={key} value={item.category_aid}>
                                    {item.category_title}
                                  </option>
                                )}
                              </React.Fragment>
                            );
                          })}
                        </InputSelect>
                      </div>
                    </div>
                    <div className="form-action flex p-4 justify-end gap-3">
                      <button className="btn btn-add" type="submit">
                        {mutation.isPending ? <SpinnerButton /> : "Add"}
                      </button>
                      <button
                        className="btn btn-cancel"
                        type="reset"
                        onClick={handleClose}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalWrapper>
    </>
  );
};

export default ModalAddFood;
