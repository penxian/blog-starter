import type { NextApiRequest, NextApiResponse } from "next";
import { ocr } from "../../lib/orcapi";

type ResponseData = {
  message: any;
};

type ImageData = {
  image: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const param: ImageData = req.body as ImageData;
    if (param.image) {
      const words = await ocr(param.image)
      res.status(200).json({ message: words });
    } else {
      res.status(200).json({ message: '图片为空' })
    }
  } else {
    res.status(404).json({ message: "404" });
  }
}
