import { Friends } from 'Tabs/Friends/Friends';
import { Counter } from 'Tabs/Counter/Counter';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Gallery } from 'pages/Gallery/Gallery';
import { Todos } from 'pages/Todos/Todos';
import { Movies } from 'Tabs/Movies/Movies';
import { Home } from 'pages/Home/Home';
import { AppBar } from './AppBar/AppBar';
import { Routes, Route } from 'react-router-dom';


export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<AppBar/>}>
        <Route index element={<Home/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='todos' element={<Todos />}/>
      </Route>
    </Routes>
    /* <Tabs>
      <TabList>
        <Tab>Gallary</Tab>
        <Tab>Todos</Tab>
        <Tab>Counter</Tab>
        <Tab>Friends</Tab>
        <Tab>Movies</Tab>
      </TabList>

      <TabPanel>
        <PhotoGallary />
      </TabPanel>
      <TabPanel>
        <Todos />
      </TabPanel>
      <TabPanel>
        <Counter />
      </TabPanel>
      <TabPanel>
        <Friends />
      </TabPanel>
      <TabPanel>
        <Movies />
      </TabPanel>
    </Tabs> */
  );
};
