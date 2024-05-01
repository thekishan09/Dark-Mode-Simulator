import { instance } from "./axios";

export const saveEmailBody = async (aliasMail) => {
  const body = { aliasMail };
  try {
    const response = await instance.post("saveMailBody", body);

    if (response.data.status) {
      return response.data;
    } else {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
export const getEmailBody = async (alias) => {
  const body = { aliasString: alias };

  try {
    const response = await instance.post("getMailBody", body);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postEmailId = async (email, listName, alias) => {
  const body = {
    email,
    data: { alias },
    created_at: new Date().toGMTString(),
    last_click: null,
    last_open: null,
    listName,
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
      
    },
  };
  try {
    const response = await instance.post(
      "",
      body,
      config
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
