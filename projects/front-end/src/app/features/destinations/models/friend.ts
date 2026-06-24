export interface Friend {
  id: number;
  name: string;
  email: string;
  pictureUrl ?: string;
}

interface BestFriend extends Friend {
  bestSince: Date;
}