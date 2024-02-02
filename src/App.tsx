import { CreateBucketFormComponent } from "@/components/CreateBucketForm";
import { CreateFruitFormComponent } from "@/components/CreateFruitForm";
import { FruitListComponent } from "@/components/FruitList";
import { BucketListComponent } from "@/components/BucketList";

function App() {
  return (
    <div className="container mx-auto flex flex-col px-1 py-4 gap-10">
      <div className="navbar p-4 bg-base-100 rounded-md shadow-md">
        <span className="text-2xl font-bold">FruitBucket</span>
      </div>
      <div className="flex flex-col gap-10 lg:grid grid-cols-2">
        <CreateBucketFormComponent />
        <CreateFruitFormComponent />
      </div>

      <FruitListComponent />
      <BucketListComponent />
    </div>
  );
}

export default App;
