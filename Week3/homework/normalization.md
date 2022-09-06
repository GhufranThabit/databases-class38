### 1.What columns violate 1NF?

1.The food_code and food_description columns contain more than one value.

2.the values in dinner_date column have different types.

3.there are some duplicate records because there are not applying a primary keys like member_id (1).

---

### 2.What entities do you recognize that could be extracted?

-dinner

-venue

-food

---

### 3.Name all the tables and columns that would make a 3NF compliant solution.

### Member

| member_id(PK) | member_name | member_address |
| ------------- | ----------- | -------------- |

### Dinner

| dinner_id(PK) | dinner_date |
| ------------- | ----------- |

### Member'sDinner

| id(PK) | member_id (FK) | dinner_id (FK) |
| ------ | -------------- | -------------- |

### Venue

| venue_code(PK) | venue_description |
| -------------- | ----------------- |

### Member'sVenue

| id(PK) | member_id (FK) | venue_code(FK) |
| ------ | -------------- | -------------- |

### Food

| food_code(PK) | food_description |
| ------------- | ---------------- |

### Member'sFood

| id(PK) | member_id (FK) | food_code(FK) |
| ------ | -------------- | ------------- |
