import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import { HistoryProduct } from './history.models';

@Injectable()
export class HistoryService {
  private readonly logger = new Logger(HistoryService.name);
  private readonly filePath = path.join(__dirname, '../../history.json');

  async addProductToHistory(product: HistoryProduct): Promise<void> {
    let history: HistoryProduct[] = [];
    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      const parsed = JSON.parse(data);
      history = Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      this.logger.warn('No se pudo leer el archivo de historial, iniciando con array vacío');
      history = [];
    }

    // Elimina si ya existe para evitar duplicados
    history = history.filter((p: HistoryProduct) => p.id !== product.id);

    // Agrega al inicio
    history.unshift(product);

    // Solo 5 elementos
    history = history.slice(0, 5);

    try {
      await fs.writeFile(this.filePath, JSON.stringify(history, null, 2));
    } catch (error) {
      this.logger.error('Error al escribir el archivo de historial', error);
      throw new Error('Error al guardar el producto en el historial');
    }
  }

  async getHistory(): Promise<HistoryProduct[]> {
    try {
      const data = await fs.readFile(this.filePath, 'utf-8');
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      this.logger.warn('No se pudo leer el archivo de historial');
      return [];
    }
  }
}