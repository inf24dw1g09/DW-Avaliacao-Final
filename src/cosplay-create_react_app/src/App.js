import logo from './logo.svg';
import './App.css';
import { Admin, Resource, ListGuesser, fetchUtils, email } from "react-admin";
import lb4Provider from "react-admin-lb4";
import { UserList } from './components/users.tsx';
import { MediaList } from './components/medias.tsx';
import { CharacterList } from './components/characters.tsx';
import { PostList } from './components/posts.tsx';

const dataProvider = lb4Provider("http://localhost:3000");

const customDataProvider = {
    // Custom getList method
    getList: async (resource, params) => {
        // Build the URL for your API request (e.g., include filters, pagination)
        const { page, perPage } = params.pagination;
        const url = `http://localhost:3000/${resource}`;

        try {
            // Fetch data from the API using fetchUtils
            const response = await fetchUtils.fetchJson(url);

            const { items, pagination } = response.body;

            // console.log({
            //     data: JSON.parse(response.body), // The array of items should be mapped to the 'data' key
            //     total: JSON.parse(response.body.length)
            // })
            // Transform the response to match React-Admin's expected format

            switch (resource) {
                case 'users':
                    return {
                        data: JSON.parse(response.body).map(el => ({
                            "id": el.user_id, "nickname": el.nickname, "email": el.email
                        })), // The array of items should be mapped to the 'data' key
                        total: JSON.parse(response.body).length
                    };
                case 'medias':
                    return {
                        data: JSON.parse(response.body).map(el => ({
                            "id": el.media_id, "name": el.name, "type": el.type_id
                        })), // The array of items should be mapped to the 'data' key
                        total: JSON.parse(response.body).length
                    };
                case 'characters':
                    return {
                        data: JSON.parse(response.body).map(el => ({
                            "id": el.character_id, "name": el.name, "media": el.media_id
                        })), // The array of items should be mapped to the 'data' key
                        total: JSON.parse(response.body).length
                    };
                case 'posts':
                    return {
                        data: JSON.parse(response.body).map(el => ({
                            "id": el.post_id, "title": el.title, "user": el.user_id, "character": el.character_id, "description": el.description
                        })), // The array of items should be mapped to the 'data' key
                        total: JSON.parse(response.body).length
                    };
            }

        } catch (error) {
            console.error('Error in getList:', error);
            throw error;
        }
    },

    // Other methods (getOne, create, update, delete) should be defined similarly
    getOne: async (resource, params) => {
        const url = `/api/${resource}/${params.id}`;
        const response = await fetchUtils.fetchJson(url);
        return {
            data: response.body, // return the data inside the 'data' key
        };
    }
}

const App = () => (
    <Admin dataProvider={customDataProvider}>
        <Resource name="users" list={UserList} />
        <Resource name="medias" list={MediaList} />
        <Resource name="characters" list={CharacterList} />
        <Resource name="posts" list={PostList} />
    </Admin>
);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Welcome!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
export default App;
