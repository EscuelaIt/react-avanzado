export interface Creatable<Entity> {
  create(entity: Entity): Promise<void>
}
