import {
    List,
    Datagrid,
    TextField,
    NumberField,
    EditButton,
    Edit,
    SimpleForm,
    TextInput,
    NumberInput,
    Create
} from "react-admin";

export const MediaList = () => (
    <List>
        {/* <CreateButton /> */}
        <Datagrid>
            <NumberField source="id" />
            <TextField source="name" />
            <NumberField source="type" />
            <EditButton />
        </Datagrid>
    </List>
);

export const MediaEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="type" />
        </SimpleForm>
    </Edit>
);

export const MediaCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <NumberInput source="type" />
            </SimpleForm>
        </Create>
    );
};