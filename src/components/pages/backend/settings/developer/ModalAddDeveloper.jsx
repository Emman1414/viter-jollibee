import * as Yup from "Yup";
import { StoreContext } from "@/components/store/storeContext";
import { X } from "lucide-react";
import React from "react";
import useUploadPhoto from "@/components/custom-hook/useUploadPhoto";
import { InputText, InputTextArea } from "@/components/helpers/FormInputs";
import { queryData } from "@/components/helpers/queryData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import SpinnerButton from "../../partials/spinners/SpinnerButton";
import ModalWrapper from "../../partials/modals/ModalWrapper";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "@/components/store/storeAction";

const ModalAddDeveloper = ({ itemEdit, developerRole }) => {
  const { dispatch, store } = React.useContext(StoreContext);
  const [value, setValue] = React.useState("");
  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto("");

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit ? `/v2/developer/${itemEdit.developer_aid}` : "/v2/developer",
        itemEdit ? "PUT" : "POST",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["developer"] });

      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage("Recorded Successfully"));
      }
    },
  });

  const handleClose = () => {
    if (mutation.isPending) return;
    dispatch(setIsAdd(false));
  };

  const initVal = {
    user_developer_first_name: itemEdit
      ? itemEdit.user_developer_first_name
      : "",
    user_developer_last_name: itemEdit ? itemEdit.user_developer_last_name : "",
    user_developer_email: itemEdit ? itemEdit.user_developer_email : "",
    user_developer_role_id: developerRole[0].role_aid,

    user_developer_email_old: itemEdit ? itemEdit.user_developer_email : "",
    user_developer_name_old: itemEdit
      ? `${itemEdit.user_developer_first_name} ${itemEdit.user_developer_last_name}`
      : "",
  };

  const yupSchema = Yup.object({
    user_developer_first_name: Yup.string().required("Required"),
    user_developer_last_name: Yup.string().required("Required"),
    user_developer_email: Yup.string()
      .required("Required")
      .email("Invalid Email."),
  });

  return (
    <>
      <ModalWrapper>
        <div className="modal-side absolute top-0 right-0 bg-primary h-[100dvh] w-[300px] border-l border-line">
          <div className="modal-header p-4 flex justify-between items-center">
            <h5 className="mb-0">{itemEdit ? "Update" : "Add"} Developer User</h5>
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
              });
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="modal-form h-full max-h-[calc(100vh-56px)] grid grid-rows-[1fr_auto]">
                    <div className="form-wrapper p-4 max-h-[80vh] h-full overflow-y-auto custom-scroll">
                      <div className="input-wrap">
                        <InputText
                          label="Developer First Name"
                          type="text"
                          name="user_developer_first_name"
                        />
                      </div>

                      <div className="input-wrap mt-8">
                        <InputTextArea
                          label="Developer Last Name"
                          type="text"
                          name="user_developer_last_name"
                        />
                      </div>

                      <div className="input-wrap mt-8">
                        <InputTextArea
                          label="Email"
                          type="text"
                          name="user_developer_email"
                        />
                      </div>
                    </div>
                    <div className="form-action flex p-4 justify-end gap-3">
                      <button className="btn btn-add" type="submit">
                        {mutation.isPending ? <SpinnerButton /> : "Save"}
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

export default ModalAddDeveloper;
