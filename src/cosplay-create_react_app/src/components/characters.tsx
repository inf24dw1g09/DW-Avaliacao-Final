import {
    List,
    Datagrid,
    TextField
} from "react-admin";

export const CharacterList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="media" />
        </Datagrid>
    </List>
);