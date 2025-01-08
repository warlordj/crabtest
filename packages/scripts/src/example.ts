import { Resource } from "sst";
import { Example } from "@crabs/core/example";

console.log(`${Example.hello()} Linked to ${Resource.MyBucket.name}.`);
