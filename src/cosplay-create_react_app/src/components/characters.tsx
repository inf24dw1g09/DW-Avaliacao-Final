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

export const CharacterList = () => (
    <List>
        <CreateButton />
        <Datagrid>
            <NumberField source="id" />
            <TextField source="name" />
            <NumberField source="media" />
            <TextField source="description" />
            <EditButton />
        </Datagrid>
    </List>
);

export const CharacterEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="media" />
            <TextInput source="description" />
        </SimpleForm>
    </Edit>
);

export const CharacterCreate = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <NumberInput source="media" />
                <TextInput source="description" />
            </SimpleForm>
        </Create>
    );
};