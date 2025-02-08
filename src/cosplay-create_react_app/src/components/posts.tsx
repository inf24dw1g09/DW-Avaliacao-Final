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
    Create,
    CreateButton
} from "react-admin";

export const PostList = () => (
    <List>
        <CreateButton />
        <Datagrid>
            <NumberField source="id" />
            <TextField source="title" />
            <NumberField source="user" />
            <NumberField source="character" />
            <TextField source="description" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <NumberInput source="character" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="title" />
                <NumberInput source="user" />
                <NumberInput source="character" />
                <TextInput source="description" />
            </SimpleForm>
        </Create>
    );
};