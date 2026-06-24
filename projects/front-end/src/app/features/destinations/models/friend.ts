export interface Friend {
  id: number;
  name: string;
  email: string;
  pictureUrl ?: string;
  age ?: number;
}

interface BestFriend extends Friend {
  bestSince: Date;
}