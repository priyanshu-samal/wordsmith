
import { pgTable, text,serial,varchar, boolean } from "drizzle-orm/pg-core";

export const AIOutput=pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formData:varchar('formData').notNull(),
    aiResponse:text('aiResponse'),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
    templateSlug:varchar('templateSlug').notNull(),


})

export const UserSubscription=pgTable('userSubscription',{
  id:serial('id').primaryKey(),
  email:varchar('email'),
  userName:varchar('userName'),
  active:boolean('active'),
  paymentId:varchar('paymentId'),
  joindate:varchar('joinDate'),
  
})