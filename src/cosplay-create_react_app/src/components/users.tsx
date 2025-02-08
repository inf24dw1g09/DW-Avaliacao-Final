import {
    List,
    Datagrid,
    TextField,
    NumberField,
    EditButton,
    Edit,
    SimpleForm,
    TextInput,
    Create
} from "react-admin";

export const UserList = () => (
    <List>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="nickname" />
            <TextField source="email" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nickname" />
            <TextInput source="email" />
            <TextInput source="password" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="nickname" />
                <TextInput source="email" />
                <TextInput source="password" />
            </SimpleForm>
        </Create>
    );
};