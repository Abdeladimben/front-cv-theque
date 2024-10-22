export interface Action{
  titre: string;
  icone: string;
  severity: 'info' | 'success' | 'warning' | 'error';
  operationFunction : 'update' | 'delete';
}
