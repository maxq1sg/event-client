import { FieldArray } from "formik";
import { FC, useContext } from "react";
import { HomeContext } from "../../pages";
import { ISearchInitValues } from "../../types/searchInitValues";

const CheckBoxGroup: FC<{ values: ISearchInitValues }> = ({ values }) => {
  const { categoryList } = useContext(HomeContext);
  return (
    <FieldArray
      name="categories"
      render={(arrayHelpers) => (
        <div>
          {categoryList?.map((category) => (
            <div key={category.id}>
              <label>
                <input
                  name="categoryIds"
                  type="checkbox"
                  value={category.id}
                  checked={values.categories.includes(category.id)}
                  onChange={(e) => {
                    if (e.target.checked) arrayHelpers.push(category.id);
                    else {
                      const idx = values.categories.indexOf(category.id);
                      arrayHelpers.remove(idx);
                    }
                  }}
                />
                {category.name}
              </label>
            </div>
          ))}
        </div>
      )}
    />
  );
};

export default CheckBoxGroup;
