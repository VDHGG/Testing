import { uuid } from "../../../node_modules/uuidv4/build/lib/uuidv4";
import type { IIdGenerator } from "../../application/port/outbound/IIdGenerator";

export class UuidGenerator implements IIdGenerator{
    generate(): string {
        return uuid();
    }
}