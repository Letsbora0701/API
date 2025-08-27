import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";  // vamos usar para transformar XML em JSON

export default async function handler(req, res) {
  try {
    const { query, start = 1, max = 10 } = req.query;
    if (!query) {
      return res.status(400).json({ error: "Parâmetro 'query' é obrigatório" });
    }

    const url = `https://www.lexml.gov.br/busca/SRU?query=${encodeURIComponent(query)}&maximumRecords=${max}&startRecord=${start}`;
    
    const response = await fetch(url);
    const xml = await response.text();

    // Se quiser retornar JSON em vez de XML
    const json = await parseStringPromise(xml, { explicitArray: false });

    res.status(200).json(json);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
