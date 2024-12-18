"use client";
import { useState } from "react";
import Input from "./UI/Input";
import Label from "./UI/Label";
import { data } from "@/app/components/Data/Data";
import Select from "react-select";
import Button from "./UI/Button";
import Dialog from "./UI/Dialog";
import Option from "./UI/Option";

function Form() {
  const colorStyles = {
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: "#FFD6FF",
        color: "#38508A",
        borderRadius: "12px",
        paddingLeft: ".25rem",
      };
    },
  };
  const [typableForm, setTypableForm] = useState({
    Name: "",
    Age: "",
    Email: "",
  });
  const [dropdownForm, setDropdownForm] = useState({
    Gender: "",
    Country: "",
    State: "",
  });
  const [issues, setIssues] = useState(null);
  const formData = {
    ...typableForm,
    ...dropdownForm,
    issues: issues?.map((issue) => issue.value),
  };
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.message === "OK") {
        setIsOpen(true);
        setTypableForm({ Name: "", Age: "", Email: "" });
        setDropdownForm({ Country: "", State: "" });
        setIssues(null);
        setError("");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {Object.keys(typableForm).map((type) => (
        <div key={type}>
          <Input
            label={type}
            value={typableForm[type]}
            type={type === "Age" ? "number" : "text"}
            id={type}
            name={type}
            onChange={(value) =>
              setTypableForm({ ...typableForm, [type]: value })
            }
            className="w-full"
          />
        </div>
      ))}
      {Object.keys(dropdownForm).map((key) => {
        return (
          <div key={key}>
            <Label label={key} />
            <select
              required
              id={key}
              name={key}
              value={dropdownForm[key]}
              onChange={(e) =>
                setDropdownForm({ ...dropdownForm, [key]: e.target.value })
              }
              className="block p-2 border-2 border-main-4 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue w-full"
            >
              <option value="" disabled className="py-6">
                Select {key}
              </option>
              {key === "Country" &&
                data[key].map(({ name }) => (
                  <option value={name} key={name}>
                    {name}
                  </option>
                ))}
              {key === "State" && dropdownForm.Country === "United States" ? (
                data[key].map(({ name }) => (
                  <option value={name} key={name}>
                    {name}
                  </option>
                ))
              ) : (
                <option value={"N/A"} key={"N/A"}>
                  N/A
                </option>
              )}
              {key === "Gender" &&
                data[key].map(({ value }) => (
                  <option value={value} key={value}>
                    {value}
                  </option>
                ))}
            </select>
          </div>
        );
      })}

      <div className="flex flex-col">
        <Label label="What women's issues are you interested in? Pick all that apply" />
        <Select
          isMulti
          options={data.Issue}
          styles={colorStyles}
          value={issues}
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          onChange={setIssues}
          components={{ Option }}
          blurInputOnSelect={false}
          className="border-main-4 focus:border-accent-blue"
        />
      </div>
      {error && <p className="text-red-700">{error}</p>}
      <Button className="mt-4">Submit</Button>
      {isOpen && <Dialog setIsOpen={setIsOpen} isOpen={isOpen} />}
    </form>
  );
}

export default Form;
