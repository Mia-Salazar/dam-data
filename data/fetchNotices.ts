import { NoticeResponseInterface } from "@/domain/notices.types";

export const fetchNotices = async (): Promise<NoticeResponseInterface[]> => {
  try {

    const response = await fetch(
      `https://www.renfe.com/content/renfe/es/es/grupo-renfe/comunicacion/renfe-al-dia/avisos/jcr:content/root/responsivegrid/rfincidentreports_co.noticeresults.json`
    );

    
    if (!response.ok) throw new Error('Error al obtener los datos');
    
    const json = await response.json();

    return json;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    throw new Error('Error desconocido');
  }
};