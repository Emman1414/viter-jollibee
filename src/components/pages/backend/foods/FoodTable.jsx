import React from "react";
import { StoreContext } from "@/components/store/storeContext";
import useQueryData from "@/components/custom-hook/useQueryData";
import ModalDelete from "@/components/partials/modal/ModalDelete";
import ModalRestore from "@/components/partials/modal/ModalRestore";
import Status from "@/components/partials/Status";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "@/components/store/storeAction";
import { Archive, ArchiveRestore, FilePenLine, Trash2 } from "lucide-react";
import LoadMore from "../partials/LoadMore";
import ModalConfirm from "../partials/modals/ModalConfirm";
import TableLoader from "@/components/partials/TableLoader";
import IconNoData from "../partials/IconNoData";
import IconServerError from "../partials/IconServerError";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";

const FoodTable = ({ setItemEdit }) => {
  const [id, setIsId] = React.useState("");
  const { store, dispatch } = React.useContext(StoreContext);

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsId(item.food_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsId(item.food_aid);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsId(item.food_aid);
  };

  const {
    isFetching,
    isLoading,
    error,
    data: result,
    status,
  } = useQueryData(
    `/v2/food`, // endpoint
    "get", // method
    "food" // key
  );

  let counter = 1;

  return (
    <>
      <div className="p-4 bg-secondary rounded-md mt-10 border border-line relative">
        {isFetching && !isLoading && <FetchingSpinner />}
        <div className="table-wrapper custom-scroll">
          {/* <TableLoader count={10} cols={4} /> */}
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Status</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan="100%">
                    <TableLoader count={20} cols={5} />
                  </td>
                </tr>
              )}
              {result?.count === 0 && (
                <tr>
                  <td colSpan="100%">
                    <IconNoData />
                  </td>
                </tr>
              )}
              {error && (
                <tr>
                  <td colSpan="100%">
                    <IconServerError />
                  </td>
                </tr>
              )}
              {result?.count > 0 &&
                result.data.map((item, key) => (
                  <tr key={key}>
                    <td>{counter++}.</td>
                    <td>
                      {item.food_is_active === 1 ? (
                        <Status text="Active" />
                      ) : (
                        <Status text="Inactive" />
                      )}
                    </td>
                    <td title={`${item.food_title}`}>{item.food_title}</td>
                    <td title={`${item.food_price}`}>{item.food_price}</td>
                    <td title={`${item.food_category_id}`}>
                      {item.category_title}
                    </td>
                    <td>
                      <ul className="table-action">
                        {item.food_is_active === 1 ? (
                          <>
                            <li>
                              <button
                                type="button"
                                className="tooltip"
                                data-tooltip="Edit"
                                onClick={() => handleEdit(item)}
                              >
                                <FilePenLine />
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="tooltip"
                                data-tooltip="Archive"
                                onClick={() => handleArchive(item)}
                              >
                                <Archive />
                              </button>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <button
                                type="button"
                                className="tooltip"
                                data-tooltip="Restore"
                                onClick={() => handleRestore(item)}
                              >
                                <ArchiveRestore />
                              </button>
                            </li>
                            <li>
                              <button
                                type="button"
                                className="tool-tip"
                                data-tooltip="Delete"
                                onClick={() => handleDelete(item)}
                              >
                                <Trash2 />
                              </button>
                            </li>
                          </>
                        )}
                      </ul>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <LoadMore />
        </div>
        {store.isDelete && (
          <ModalDelete
            setIsDelete={setIsDelete}
            mysqlApiDelete={`/v2/food/${id}`}
            queryKey={"food"}
          />
        )}
        {store.isArchive && (
          <ModalConfirm
            setIsArchive={setIsArchive}
            mysqlEndpoint={`/v2/food/active/${id}`}
            queryKey={"food"}
          />
        )}
        {store.isRestore && (
          <ModalRestore
            setIsRestore={setIsRestore}
            mysqlEndpoint={`/v2/food/active/${id}`}
            queryKey={"food"}
          />
        )}
      </div>
    </>
  );
};

export default FoodTable;
