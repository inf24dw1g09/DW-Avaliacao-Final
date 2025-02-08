import logo from './logo.svg';
import './App.css';
import { Admin, Resource, EditGuesser, fetchUtils, email } from "react-admin";
// import lb4Provider from "react-admin-lb4";
import { UserCreate, UserEdit, UserList } from './components/users.tsx';
import { MediaCreate, MediaEdit, MediaList } from './components/medias.tsx';
import { CharacterCreate, CharacterEdit, CharacterList } from './components/characters.tsx';
import { PostCreate, PostEdit, PostList } from './components/posts.tsx';
import { func } from 'prop-types';
import 'dotenv/config';

const server = process.env.DB_HOST; 

function dataFormat(response, resource) {
    switch (resource) {
        case 'users':
            return {
                data: JSON.parse(response).map(el => ({
                    "id": el.user_id, "nickname": el.nickname, "email": el.email
                })),
                total: JSON.parse(response).length
            };
        case 'medias':
            return {
                data: JSON.parse(response).map(el => ({
                    "id": el.media_id, "name": el.name, "type": el.type_id
                })),
                total: JSON.parse(response).length
            };
        case 'characters':
            return {
                data: JSON.parse(response).map(el => ({
                    "id": el.character_id, "name": el.name, "media": el.media_id, "description": el.description
                })),
                total: JSON.parse(response).length
            };
        case 'posts':
            return {
                data: JSON.parse(response).map(el => ({
                    "id": el.post_id, "title": el.title, "user": el.user_id, "character": el.character_id, "description": el.description
                })),
                total: JSON.parse(response).length
            };
        default:
            return {
                data: [],
                total: 0
            }
    }
}

function dataOneFormat(response, resource) {
    let el = JSON.parse(response);
    switch (resource) {
        case 'users':
            return {
                data: {
                    "id": el.user_id, "nickname": el.nickname, "email": el.email
                }
            };
        case 'medias':
            return {
                data: {
                    "id": el.media_id, "name": el.name, "type": el.type_id
                }
            };
        case 'characters':
            return {
                data: {
                    "id": el.character_id, "name": el.name, "media": el.media_id, "description": el.description
                }
            };
        case 'posts':
            return {
                data: {
                    "id": el.post_id, "title": el.title, "user": el.user_id, "character": el.character_id, "description": el.description
                }
            };
        default:
            return {
                data: {}
            }
    }
}

function dataBackFormat(el, resource) {
    switch (resource) {
        case 'users':
            return {
                "user_id": el.id, "nickname": el.nickname, "email": el.email, "password": el.password
            };
        case 'medias':
            return {
                    "media_id": el.id, "name": el.name, "type_id": el.type
            };
        case 'characters':
            return {
                    "character_id": el.id, "name": el.name, "media_id": el.media, "description": el.description
            };
        case 'posts':
            return {
                    "post_id": el.id, "title": el.title, "user_id": el.user, "character_id": el.character, "description": el.description
            };
        default:
            return {
            }
    }
}

const customDataProvider = {
    getList: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const url = `http://${server}/${resource}`;

        try {
            const response = await fetchUtils.fetchJson(url);
            return dataFormat(response.body, resource);
            const { items, pagination } = response;
        }
        catch (error) {
            console.error('Error in getList:', error);
            throw error;
        }
    },

    getOne: async (resource, params) => {
        const url = `http://${server}/${resource}/${params.id}`;
        const response = await fetchUtils.fetchJson(url);
        return dataOneFormat(response.body, resource);
    },

    update: async (resource, params) => {
        const url = `http://${server}/${resource}/${params.id}`;
        return await fetchUtils.fetchJson(url, {
            method: 'PUT',
            body: JSON.stringify(dataBackFormat(params.data, resource)),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        }).then(({ json }) => (
            dataOneFormat(JSON.stringify(json), resource)
        ));
    },

    delete: async (resource, params) => {
        const url = `http://${server}/${resource}/${params.id}`;

        return await fetchUtils.fetchJson(url, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        }).then(() => ({
            data: params.previousData,
        }));
    },

    create: async (resource, params) => {
        const { data } = params;
        return fetchUtils.fetchJson(`http://${server}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(dataBackFormat(params.data, resource)),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        })
        .then(({ json }) => (
            dataOneFormat(JSON.stringify(json), resource)
        ));
    }
};

const App = () => (
    <Admin dataProvider={customDataProvider}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}/>
        <Resource name="medias" list={MediaList} edit={MediaEdit} create={MediaCreate}/>
        <Resource name="characters" list={CharacterList} edit={CharacterEdit} create={CharacterCreate}/>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
    </Admin>
);

export default App;
