import { axiosInstance } from "./instance";
import { Story, StoryItem} from '@prisma/client';

export type IStory = Story & {
    items: StoryItem[];
};

export const getAll = async () =>{
    const {data} = await axiosInstance.get<IStory[]>('/stories')
    return data;
}