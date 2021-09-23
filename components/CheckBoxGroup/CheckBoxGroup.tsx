import { Checkbox, FormControlLabel } from "@material-ui/core";
import { FieldArray } from "formik";
import { FC, useContext } from "react";
import { HomeContext } from "../../pages";
import { SearchPageContext } from "../../pages/search";
import { ISearchInitValues } from "../../types/searchInitValues";

const CheckBoxGroup: FC<{ values: ISearchInitValues }> = ({ values }) => {
  const { categoryList } = useContext(SearchPageContext);
  return (
    <FieldArray
      name="categories"
      render={(arrayHelpers) => (
        <div>
          {categoryList?.map((category) => (
            <div key={category.id}>
              <FormControlLabel
                name="categories"
                value={category.id}
                control={
                  <Checkbox
                    color="primary"
                    checked={values.categories.includes(category.id)}
                    onChange={(e) => {
                      if (e.target.checked) arrayHelpers.push(category.id);
                      else {
                        const idx = values.categories.indexOf(category.id);
                        arrayHelpers.remove(idx);
                      }
                    }}
                  />
                }
                label={category.name}
                labelPlacement="end"
              />
            </div>
          ))}
        </div>
      )}
    />
  );
};

export default CheckBoxGroup;
