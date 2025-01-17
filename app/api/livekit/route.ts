import { AccessToken } from "livekit-server-sdk";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const room = req.nextUrl.searchParams.get("room"); // Obtener el parámetro de consulta "room"
  const username = req.nextUrl.searchParams.get("username"); // Obtener el parámetro de consulta "username"
  if (!room) {
    return NextResponse.json(
      { error: 'Falta el parámetro de consulta "room"' },
      { status: 400 }
    );
  } else if (!username) {
    return NextResponse.json(
      { error: 'Falta el parámetro de consulta "username"' },
      { status: 400 }
    );
  }

  const apiKey = process.env.LIVEKIT_API_KEY; // Clave API para LiveKit
  const apiSecret = process.env.LIVEKIT_API_SECRET; // Secret API para LiveKit
  const wsUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL; // URL pública para WebSocket de LiveKit

  if (!apiKey || !apiSecret || !wsUrl) {
    return NextResponse.json(
      { error: "Configuración incorrecta del servidor" },
      { status: 500 }
    );
  }

  const at = new AccessToken(apiKey, apiSecret, { identity: username });

  // Agregar permisos para unirse a la sala y publicar/suscribirse
  at.addGrant({ room, roomJoin: true, canPublish: true, canSubscribe: true });

  return NextResponse.json({ token: await at.toJwt() }); // Devolver el token generado
}
