import {
    Checkbox,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

//will need to refactor this to avoid duplication

const FirebaseCategorySelect = ({
    uploadCategories,
    formData,
    setFormData,
}) => {
    const handleSelectedCategoriesChange = (e, categoryIndex) => {
        const selectedValue = uploadCategories[categoryIndex].name;
        var newSelectedCategories;
        if (e.target.checked) {
            newSelectedCategories = [...formData.categories, selectedValue];
        } else {
            newSelectedCategories = formData.categories.filter(
                (category) => category !== selectedValue
            );
        }

        const newFormData = {
            ...formData,
            categories: newSelectedCategories,
        };

        setFormData(newFormData);
    };

    const handleSelectedSubCategoriesChange = (
        e,
        categoryIndex,
        subCategoryIndex
    ) => {
        const selectedValue =
            uploadCategories[categoryIndex].subCategories[subCategoryIndex]
                .name;
        console.log(selectedValue);
        var newSelectedCategories;
        if (e.target.checked) {
            newSelectedCategories = [...formData.subCategories, selectedValue];
        } else {
            newSelectedCategories = formData.subCategories.filter(
                (category) => category !== selectedValue
            );
        }

        const newFormData = {
            ...formData,
            subCategories: newSelectedCategories,
        };

        setFormData(newFormData);
    };

    return (
        <Box>
            <Typography variant="h6">Select Categories: </Typography>
            <List dense>
                {uploadCategories.map((category, categoryIndex) => {
                    return (
                        <ListItem
                            key={categoryIndex}
                            secondaryAction={
                                <Checkbox
                                    edge="end"
                                    onChange={(e) => {
                                        handleSelectedCategoriesChange(
                                            e,
                                            categoryIndex
                                        );
                                    }}
                                    value={category.name}
                                    checked={formData.categories.includes(
                                        category.name
                                    )}
                                    // inputProps={{ "aria-labelledby": labelId }}
                                />
                            }
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemText
                                    primaryTypographyProps={{
                                        fontSize: "1rem",
                                    }}
                                    // id={labelId}
                                    primary={category.name}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
            <Typography variant="h6">Select Subcategories: </Typography>
            {uploadCategories.map((category, categoryIndex) => {
                return (
                    <List dense key={categoryIndex}>
                        {formData.categories.includes(category.name) &&
                            category.subCategories.map(
                                (subCategory, subCategoryIndex) => {
                                    return (
                                        <ListItem
                                            key={subCategoryIndex}
                                            secondaryAction={
                                                <Checkbox
                                                    edge="end"
                                                    onChange={(e) => {
                                                        handleSelectedSubCategoriesChange(
                                                            e,
                                                            categoryIndex,
                                                            subCategoryIndex
                                                        );
                                                    }}
                                                    value={subCategory.name}
                                                    checked={formData.subCategories.includes(
                                                        subCategory.name
                                                    )}
                                                    // inputProps={{ "aria-labelledby": labelId }}
                                                />
                                            }
                                            disablePadding
                                        >
                                            <ListItemButton>
                                                <ListItemText
                                                    primaryTypographyProps={{
                                                        fontSize: "1rem",
                                                    }}
                                                    // id={labelId}
                                                    primary={subCategory.name}
                                                />
                                            </ListItemButton>
                                        </ListItem>
                                    );
                                }
                            )}
                    </List>
                );
            })}
        </Box>
    );
};

export default FirebaseCategorySelect;
