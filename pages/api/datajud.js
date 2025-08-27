import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const { tribunal, classe, assunto, pagina } = req.query;

    let url = "https://datajud.cnj.jus.br/api_publica_teste/cnj/proc?";

    if (tribunal) url += `&tribunal=${encodeURIComponent(tribunal)}`;
    if (classe) url += `&classe=${encodeURIComponent(classe)}`;
    if (assunto) url += `&assunto=${encodeURIComponent(assunto)}`;
    if (pagina) url += `&pagina=${encodeURIComponent(pagina)}`;

    const response = await fetch(url);
    if (!response.ok) {
      return res.status(response.status).json({ error: "Erro ao consultar DataJud CNJ" });
    }

    const data = await response.json();
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
