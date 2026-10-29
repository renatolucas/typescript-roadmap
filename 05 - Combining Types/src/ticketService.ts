import type { Ticket, TicketPriority, TicketStatus, StoredTicket, TicketField, TicketId } from "./types.js"

export function createTicket(id: TicketId, title: string, priority: TicketPriority): StoredTicket {
    if (title.trim().length === 0) {
        throw new TypeError("Invalid title");
    }

    const status: TicketStatus = "open";
    const createdAt = new Date();
    const updatedAt = new Date();
    return { id, title, status, priority, createdAt, updatedAt }
}

export function updateTicketStatus(storedTicket: StoredTicket, newStatus: TicketStatus): StoredTicket {
    const newStoredTicket: StoredTicket = { ...storedTicket };
    newStoredTicket.updatedAt = new Date();
    newStoredTicket.status = newStatus;
    return newStoredTicket;
}

export function getTicketField(ticket: Ticket, key: TicketField) {
    return ticket[key];
}

export function formatTicketId(ticketId: TicketId): string {
    if (typeof ticketId === "number") {
        return "#" + ticketId.toString();
    }

    return ticketId.toUpperCase();
}
