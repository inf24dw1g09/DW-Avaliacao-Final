import {
    List,
    Datagrid,
    TextField
} from "react-admin";

export const MediaList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="type" />
        </Datagrid>
    </List>
);