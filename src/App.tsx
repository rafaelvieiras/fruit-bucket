import "./App.css";
import { CreateBucketFormComponent } from "./components/CreateBucketForm";
import { CreateFruitFormComponent } from "./components/CreateFruitForm";
import { FruitListComponent } from "./components/FruitList";
import { BucketListComponent } from "./components/BucketList";

function App() {
  return (
    <>
      <div>
        <CreateBucketFormComponent />
      </div>
      <div>
        <CreateFruitFormComponent />
      </div>
      <FruitListComponent />
      <BucketListComponent />
    </>
  );
}

export default App;
