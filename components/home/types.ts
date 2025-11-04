
export type TProject = {
  logo: string;
  title: string;
  category: string[];
  description: string;
  link: string;
};

export type ContactFormstate ={
  name?: string ;
  email?: string ;
  message?: string ;
    success: boolean;
    error:{
      name?: string;
      email?: string;
      message?: string;
    }
}