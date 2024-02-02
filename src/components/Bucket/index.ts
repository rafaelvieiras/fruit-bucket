import { BucketActionComponent } from "@/components/Bucket/BucketAction";
import { BucketActionsComponent } from "@/components/Bucket/BucketActions";
import { BucketFruitListComponent } from "@/components/Bucket/BucketFruitList";
import { BucketNameComponent } from "@/components/Bucket/BucketName";
import { BucketRootComponent } from "@/components/Bucket/BucketRoot";
import { BucketStatusComponent } from "@/components/Bucket/BucketStatus";

export const Bucket = {
  Root: BucketRootComponent,
  Name: BucketNameComponent,
  Actions: BucketActionsComponent,
  Action: BucketActionComponent,
  Fruits: BucketFruitListComponent,
  Status: BucketStatusComponent,
};
