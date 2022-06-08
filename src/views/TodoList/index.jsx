import React, { useState } from "react";
import "./styles.scss";
import InputFieldDate from "../../components/InputFieldDate";
import InputFieldText from "../../components/InputFieldText";
import InputFieldDescription from "../../components/InputFieldDescription";
import FieldSelect from "../../components/FieldSelect";
import ButtonSubmit from "../../components/ButtonSubmit";

const TodoList = () => {
  const options = [
    { value: "low", name: "low" },
    { value: "normal", name: "normal" },
    { value: "high", name: "high" },
  ];

  const [dataTodoList, setDataTodoList] = useState(
    JSON.parse(localStorage.getItem("todo-list"))
  );

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    due_date: "",
    piority: "normal",
  });

  const [formDataUpdate, setFormDataUpdate] = useState({
    id: "",
    title: "",
    description: "",
    due_date: "",
    piority: "normal",
    checked: "",
  });

  const [search, setSearch] = useState("");

  const validate = (data, setData) => {
    let errors = {};
    if (!data.title) {
      errors.error_title = "Please enter data";
    }
    if (!data.due_date) {
      errors.error_due_date = "Please enter data";
    }

    if (Number(Object.keys(errors).length) > 0) {
      setData((prev) => {
        return { ...prev, ...errors };
      });
      return false;
    }
    return true;
  };

  const onSubmitAdd = () => {
    if (!validate(formData, setFormData)) {
      return;
    }

    if (Array.isArray(dataTodoList)) {
      let dataMax = dataTodoList.sort(function (a, b) {
        return a.id - b.id;
      });

      localStorage.setItem(
        "todo-list",
        JSON.stringify([
          ...dataTodoList,
          {
            id: dataMax[dataMax.length - 1].id + 1,
            title: formData.title,
            description: formData.description,
            due_date: formData.due_date,
            piority: formData.piority,
            checked: false,
          },
        ])
      );
      setDataTodoList(JSON.parse(localStorage.getItem("todo-list")));
      setFormData({
        title: "",
        description: "",
        due_date: "",
        piority: "normal",
      });
      alert("Add data successfully");
      return;
    }
    localStorage.setItem(
      "todo-list",
      JSON.stringify([
        {
          id: 1,
          title: formData.title,
          description: formData.description,
          due_date: formData.due_date,
          piority: formData.piority,
          checked: false,
        },
      ])
    );
    setFormData({
      title: "",
      description: "",
      due_date: "",
      piority: "normal",
    });
    setDataTodoList(JSON.parse(localStorage.getItem("todo-list")));
    alert("Add data successfully");
  };

  const onSubmitUpdate = (id) => {
    if (!validate(formDataUpdate, setFormDataUpdate)) {
      return;
    }

    localStorage.setItem(
      "todo-list",
      JSON.stringify([
        ...dataTodoList.filter((item) => Number(item.id) !== Number(id)),
        { ...formDataUpdate, detail: false },
      ])
    );
    setDataTodoList(JSON.parse(localStorage.getItem("todo-list")));
    alert("Update data successfully");
    return;
  };

  const deleteItem = (id) => {
    let data = dataTodoList.filter((item) => Number(item.id) !== id);
    if (data?.length > 0) {
      localStorage.setItem("todo-list", JSON.stringify([...data]));
      setDataTodoList([...data]);
    } else {
      localStorage.removeItem("todo-list");
      setDataTodoList();
    }
  };

  const detailItem = (data) => {
    dataTodoList.forEach((item) => {
      if (Number(item.id) === Number(data.id)) {
        item.detail = !item.detail;
      } else {
        item.detail = false;
      }
    });
    setFormDataUpdate({ ...data });
    setDataTodoList([...dataTodoList]);
  };

  const checkedItem = (id) => {
    dataTodoList.forEach((item) => {
      if (Number(item.id) === Number(id)) {
        item.checked = !item.checked;
      }
    });

    localStorage.setItem("todo-list", JSON.stringify([...dataTodoList]));
    setDataTodoList([...dataTodoList]);
  };

  return (
    <div className="todo-list">
      <div className="new-task">
        <h3>New Task</h3>
        <InputFieldText
          label="Add new task"
          error={formData.error_title}
          onChange={(value) => {
            setFormData((prev) => {
              return { ...prev, title: value, error_title: null };
            });
          }}
          value={formData.title}
        />
        <InputFieldDescription
          label="Description"
          onChange={(value) => {
            setFormData((prev) => {
              return { ...prev, description: value};
            });
          }}
          value={formData.description}
        />
        <div className="row">
          <InputFieldDate
            label="Due Date"
            error={formData.error_due_date}
            onChange={(value) => {
              setFormData((prev) => {
                return { ...prev, due_date: value, error_due_date: null };
              });
            }}
            value={formData.due_date}
          />
          <FieldSelect
            label="Piority"
            onChange={(value) => {
              setFormData((prev) => {
                return { ...prev, piority: value };
              });
            }}
            error={formData.error_piority}
            value={formData.piority}
            options={options}
          />
        </div>
        <ButtonSubmit text={"Add"} handleSubmit={() => onSubmitAdd()} />
      </div>
      <div className="list">
        <div className="todo-list-detail">
          <h3>To Do List</h3>
          <InputFieldText
            label="Search"
            onChange={(value) => {
              setSearch(value);
            }}
          />
          <div className="items">
            {dataTodoList
              ?.sort(
                (listA, listB) =>
                  new Date(listA.due_date) - new Date(listB.due_date)
              )
              ?.filter((data) => data.title.includes(search))
              ?.map((item, key) => {
                return (
                  <div key={key} className="item">
                    <div className="parent">
                      <div className="right">
                        <input
                          type="checkbox"
                          onClick={() => checkedItem(item.id)}
                          checked={item.checked && "checked"}
                        />
                        <p>{item.title}</p>
                      </div>
                      <div className="left">
                        <button onClick={() => detailItem(item)}>Detail</button>
                        <button onClick={() => deleteItem(item?.id)}>
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className={`child ${item.detail && "show"}`}>
                      <InputFieldText
                        label="Add new task"
                        error={formDataUpdate.error_title}
                        onChange={(value) => {
                          setFormDataUpdate((prev) => {
                            return { ...prev, title: value, error_title: null };
                          });
                        }}
                        value={formDataUpdate.title}
                      />
                      <InputFieldDescription
                        label="Description"
                        onChange={(value) => {
                          setFormDataUpdate((prev) => {
                            return {
                              ...prev,
                              description: value,
                            };
                          });
                        }}
                        value={formDataUpdate.description}
                      />
                      <div className="row">
                        <InputFieldDate
                          label="Due Date"
                          error={formDataUpdate.error_due_date}
                          onChange={(value) => {
                            setFormDataUpdate((prev) => {
                              return {
                                ...prev,
                                title: value,
                                error_due_date: null,
                              };
                            });
                          }}
                          value={formDataUpdate.due_date}
                        />
                        <FieldSelect
                          label="Piority"
                          options={options}
                          error={formDataUpdate.error_title}
                          onChange={(value) => {
                            setFormDataUpdate((prev) => {
                              return {
                                ...prev,
                                piority: value,
                                error_piority: null,
                              };
                            });
                          }}
                          value={formDataUpdate.piority}
                        />
                      </div>
                      <ButtonSubmit
                        text={"Update"}
                        handleSubmit={() => onSubmitUpdate(item.id)}
                      />
                    </div>
                  </div>
                );
              })}
            {dataTodoList?.filter((data) => data.title.includes(search))
              .length === 0 && <p className="no-data">No Data</p>}
          </div>
        </div>
        {dataTodoList?.filter((item) => item.checked)?.length > 0 && (
          <div className="bulk-action">
            {dataTodoList
              ?.filter((item) => item.checked)
              ?.map((item, key) => {
                return (
                  <div className="item" key={key}>
                    <div className="right">
                      <p>Bulk Action: {item.title}</p>
                    </div>
                    <div className="left">
                      <button>Done</button>
                      <button onClick={() => checkedItem(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
