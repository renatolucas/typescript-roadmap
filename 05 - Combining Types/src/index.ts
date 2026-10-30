import {
    createTicket,
    updateTicketStatus,
    getTicketField,
    formatTicketId
} from "./ticketService.js";

// Simple assertion helper
function assert(condition: boolean, message: string): void {
    if (!condition) {
        throw new Error(`FAIL: ${message}`);
    }

    console.log(`PASS: ${message}`);
}

// 1. Create tickets
console.log("\n--- CREATE TICKETS ---");

const ticket1 = createTicket(1, "Fix login issue", "high");
const ticket2 = createTicket("TCK-002", "Update documentation", "low");

console.table([ticket1, ticket2]);

assert(ticket1.id === 1, "Numeric ticket ID");
assert(ticket2.id === "TCK-002", "String ticket ID");
assert(ticket1.status === "open", "Initial status is open");
assert(ticket1.createdAt instanceof Date, "CreatedAt is a Date");
assert(ticket1.updatedAt instanceof Date, "UpdatedAt is a Date");

// 2. Update ticket status
console.log("\n--- UPDATE TICKET STATUS ---");

const updatedTicket = updateTicketStatus(ticket1, "in_progress");

console.log("Original ticket:", ticket1);
console.log("Updated ticket:", updatedTicket);

assert(updatedTicket.status === "in_progress", "Status updated");
assert(ticket1.status === "open", "Original ticket remains unchanged");
assert(updatedTicket !== ticket1, "A new object was created");
assert(
    updatedTicket.createdAt.getTime() === ticket1.createdAt.getTime(),
    "Creation date preserved"
);
assert(
    updatedTicket.updatedAt.getTime() >= ticket1.updatedAt.getTime(),
    "Update timestamp is valid"
);

// 3. Get ticket fields
console.log("\n--- GET TICKET FIELDS ---");

const title = getTicketField(ticket1, "title");
const priority = getTicketField(ticket1, "priority");

console.log("Title:", title);
console.log("Priority:", priority);

assert(title === "Fix login issue", "Title retrieved");
assert(priority === "high", "Priority retrieved");

// 4. Format ticket IDs
console.log("\n--- FORMAT TICKET IDS ---");

const numericId = formatTicketId(ticket1.id);
const stringId = formatTicketId(ticket2.id);

console.log("Numeric ID:", numericId);
console.log("String ID:", stringId);

assert(numericId === "#1", "Numeric ID formatted");
assert(stringId === "TCK-002", "String ID formatted");

// 5. Validate invalid titles
console.log("\n--- VALIDATE INVALID TITLES ---");

try {
    createTicket(3, "   ", "medium");

    throw new Error("Expected TypeError was not thrown");
} catch (error: unknown) {
    if (error instanceof TypeError) {
        console.log("PASS: Invalid title rejected");
    } else {
        throw error;
    }
}

console.log("\n--- ALL TESTS COMPLETED ---");