import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ error: "Parâmetro 'query' é obrigatório" });
    }

    const url = `https://www.lexml.gov.br/busca/SRU?query=tipoDocumento any lei and ${encodeURIComponent(query)}&maximumRecords=10`;
    const response = await fetch(url);
    const xml = await response.text();

    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(xml);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
