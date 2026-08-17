import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error("VITE_SUPABASE_URL não configurada.");
}

if (!supabaseAnonKey) {
  throw new Error("VITE_SUPABASE_ANON_KEY não configurada.");
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);

export const supabaseBucket =
  import.meta.env.VITE_SUPABASE_BUCKET || "portfolio-images";

/**
 * Faz upload de uma imagem do projeto diretamente
 * para o Supabase Storage e retorna a URL pública.
 */
export async function uploadProjectImage(
  file: File
): Promise<string> {
  const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";

  const fileName = `${crypto.randomUUID()}.${extension}`;

  const filePath = `projects/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from(supabaseBucket)
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type,
    });

  if (uploadError) {
    console.error(
      "Erro ao enviar imagem para o Supabase:",
      uploadError
    );

    throw new Error(
      uploadError.message || "Não foi possível enviar a imagem."
    );
  }

  const { data } = supabase.storage
    .from(supabaseBucket)
    .getPublicUrl(filePath);

  if (!data?.publicUrl) {
    throw new Error(
      "Não foi possível obter a URL pública da imagem."
    );
  }

  return data.publicUrl;
}