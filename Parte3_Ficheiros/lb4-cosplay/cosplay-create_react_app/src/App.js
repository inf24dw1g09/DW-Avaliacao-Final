import { Admin, Resource, ListGuesser } from "react-admin";
import lb4Provider from "react-admin-lb4";
const dataProvider = lb4Provider("http://localhost:3000");
const App = () => (
 <Admin dataProvider={dataProvider}>
 <Resource name="users" list={ListGuesser} />
 <Resource name="characters" list={ListGuesser} />
 <Resource name="media" list={ListGuesser} />
 <Resource name="posts" list={ListGuesser} />
 <Resource name="comments" list={ListGuesser} />
 </Admin>
);

export default App;
