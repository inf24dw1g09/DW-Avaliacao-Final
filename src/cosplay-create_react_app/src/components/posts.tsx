import {
    List,
    Datagrid,
    TextField
} from "react-admin";

export const PostList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="user" />
            <TextField source="character" />
            <TextField source="description" />
        </Datagrid>
    </List>
);