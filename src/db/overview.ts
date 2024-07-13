import {collection, getDocs} from "@firebase/firestore";
import {db} from "@/utils/firestore";

export async function getOverview(subdomain: string) {
    const dbCollection = collection(db, subdomain);
    const overviewSnapshot = await getDocs(dbCollection);
    return overviewSnapshot.docs.map(doc => doc.data());
}