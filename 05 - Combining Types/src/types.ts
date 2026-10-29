export type TicketId = string | number;
export type TicketStatus = "open" | "in_progress" | "closed"
export type TicketPriority = "low" | "medium" | "high"
export type StoredTicket = Ticket & AuditInfo
export type TicketField = keyof Ticket;

export interface Ticket {
    id: TicketId,
    title: string,
    status: TicketStatus,
    priority: TicketPriority
}

export interface AuditInfo {
    createdAt: Date,
    updatedAt: Date
}