/**
 * If you are not familiar with database design, you may skip this question.
 *
 *
 * You are designing the database for a simple Internet service provider, according to the following
 * business rules:
 *  1. A customer can subscribe to one or more plans
 *  2. A plan consists of one or more services
 *  3. The same service can be in multiple plans
 *
 * The tasks for this question are
 *  1. Describe how you would design the database tables for the company. 
 *     List the tables, with their fields and types below. 
 *     Indicate any constraints and foreign keys to other tables.
 *  2. Based on your table design, write an SQL query to get the list of unique customers who
 *     subscribed to the "unlimited music" service
 */
-- Question 1
-- A customer can have many plans (1:N) but many customer can have many plans (N:N)
-- Thus a join table will be used called subscriptions
-- A plan can have many services (1:N)
-- A service can be in multiple plans (1:N)
--
-- Overall structure of database would look like
-- customers ------->       subscriptions <---------- plans <-----------         services
-- Table one                Join Table                Table two                  Table Three
-- customers                subscriptions             plans                      services
-- customer_name: String    customer_id: foreign_key  services_id: foregin_key   service_name: string
-- Address: String          plans_id: foreign_key     plan_name: string          etc.
-- etc.                     ---                       price: integer.            etc.
-- etc.                                               etc.                       etc.
--

-- Question 2
-- Select DISTINCT customer_name
-- FROM subscriptions
-- JOIN customer on subscriptions.customer_id = customer.id
-- JOIN plans on subscriptions.plans_id = plans.id
-- JOIN services on plans.services_id = services.id
-- WHERE service_name = 'unlimited music'