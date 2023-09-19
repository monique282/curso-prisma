export type Post = {
  id: number;
  username: string;
  title: string;
  body: string;
  createAt?: string;
}

export type ApplicationError = {
  name: string;
  message: string;
};

