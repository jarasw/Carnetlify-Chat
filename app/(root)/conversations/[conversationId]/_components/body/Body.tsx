"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import Message from "./Message";
import { useMutationState } from "@/hooks/useMutationState";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useConversation } from "@/hooks/useConversation";
import { CallRoom } from "./CallRoom";

type Props = {
  members: {
    _id?: Id<"users">;
    lastSeenMessageId?: Id<"messages">;
    username?: string;
    [key: string]: any;
  }[];
  callType: "audio" | "video" | null; // Tipo de llamada (audio o video)
  setCallType: Dispatch<SetStateAction<"audio" | "video" | null>>; // Función para actualizar el tipo de llamada
};

const Body = ({ members, callType, setCallType }: Props) => {
  const { conversationId } = useConversation(); // Obtener el ID de la conversación actual

  const messages = useQuery(api.messages.get, {
    id: conversationId as Id<"conversations">,
  });

  const { mutate: markRead } = useMutationState(api.conversation.markRead);

  useEffect(() => {
    if (messages && messages.length > 0) {
      markRead({
        conversationId,
        messageId: messages[0].message._id, // Marcar el primer mensaje como leído
      });
    }
  }, [messages?.length, conversationId, markRead]);

  const formatSeenBy = (names: string[]) => {
    switch (names.length) {
      case 1:
        return (
          <p className="text-muted-foreground text-sm text-right">{`Visto por ${names[0]}`}</p>
        );
      case 2:
        return (
          <p className="text-muted-foreground text-sm text-right">{`Visto por ${names[0]} y ${names[1]}`}</p>
        );
      default:
        return (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <p className="text-muted-foreground text-sm text-right">{`Visto por ${
                  names[0]
                }, ${names[1]} y ${names.length - 2} más`}</p>
              </TooltipTrigger>
              <TooltipContent>
                <ul>
                  {names.map((name, index) => {
                    return <li key={index}>{name}</li>; // Lista de usuarios que han visto el mensaje
                  })}
                </ul>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
    }
  };

  const getSeenMessage = (messageId: Id<"messages">, senderId: Id<"users">) => {
    const seenUsers = members
      .filter(
        (member) =>
          member.lastSeenMessageId === messageId && member._id !== senderId
      )
      .map((user) => user.username!.split(" ")[0]); // Obtener los nombres de los usuarios que han visto el mensaje

    if (seenUsers.length === 0) return undefined;

    return formatSeenBy(seenUsers);
  };

  return (
    <div className="flex-1 w-full flex overflow-y-scroll flex-col-reverse gap-2 p-3 no-scrollbar">
      {!callType ? ( // Si no hay llamada activa
        messages?.map(
          ({ message, senderImage, senderName, isCurrentUser }, index) => {
            const lastByUser =
              messages[index - 1]?.message.senderId ===
              messages[index].message.senderId; // Verificar si el mensaje anterior es del mismo usuario

            const seenMessage = getSeenMessage(message._id, message.senderId); // Verificar quién ha visto el mensaje

            return (
              <Message
                key={message._id}
                fromCurrentUser={isCurrentUser} // Indica si el mensaje es del usuario actual
                senderImage={senderImage} // Imagen del remitente
                senderName={senderName} // Nombre del remitente
                lastByUser={lastByUser} // Indica si es el último mensaje del remitente
                content={message.content} // Contenido del mensaje
                createdAt={message._creationTime} // Fecha de creación
                seen={seenMessage} // Información sobre quién lo ha visto
                type={message.type} // Tipo de mensaje
              />
            );
          }
        )
      ) : (
        <CallRoom
          audio={callType === "audio" || callType === "video"} // Habilitar audio
          video={callType === "video"} // Habilitar video
          handleDisconnect={() => setCallType(null)} // Manejar la desconexión de la llamada
        />
      )}
    </div>
  );
};

export default Body;