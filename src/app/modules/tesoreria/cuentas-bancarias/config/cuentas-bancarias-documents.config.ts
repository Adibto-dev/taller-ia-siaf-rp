import { ESTADO } from '../../../../core/models/documento.model';
import type {
  DocumentsRecordsColumn,
  DocumentsRecordsConfig,
  DocumentsRecordsFilterOption,
  DocumentsRecordsMenuOption,
} from '../../../../shared/types/documents-records.types';
import { buildProcessBreadcrumbs } from '../../../../shared/utils/breadcrumbs.util';
import { CREATE_DOCUMENT_OPTIONS, PROCESS_ID, PROCESS_ROUTE, REQUEST_ROUTE } from './cuentas-bancarias.rutas';

/**
 * Configuración de «Documentos y registros» del proceso de ejemplo. La pantalla completa la pinta
 * `siaf-documents-records-page`: aquí solo se dice qué columnas, filtros y opciones tiene.
 */

const documentColumns: DocumentsRecordsColumn[] = [
  { key: 'document', label: 'Documento', visibility: 'visible', group: 'default', widthClass: 'w-[380px]', kind: 'document-link' },
  { key: 'number', label: 'Número', visibility: 'visible', group: 'default', widthClass: 'w-[280px]' },
  { key: 'actionType', label: 'Tipo de acción', visibility: 'visible', group: 'default', widthClass: 'w-[160px]' },
  { key: 'status', label: 'Estado', visibility: 'visible', group: 'default', widthClass: 'w-[150px]', kind: 'flow-status' },
  { key: 'system', label: 'Sistemas Nacionales', visibility: 'visible', group: 'default', widthClass: 'w-[240px]' },
  { key: 'date', label: 'Fecha de registro', visibility: 'visible', group: 'default', widthClass: 'w-[170px]' },
  { key: 'creator', label: 'Creador', visibility: 'visible', group: 'more', widthClass: 'w-[220px]' },
  { key: 'subject', label: 'Asunto/Motivo', visibility: 'hidden', group: 'more', widthClass: 'w-[280px]' },
  { key: 'requesterArea', label: 'Área solicitante', visibility: 'hidden', group: 'more', widthClass: 'w-[240px]' },
  { key: 'entity', label: 'Entidad', visibility: 'visible', group: 'more', widthClass: 'w-[320px]' },
  { key: 'evaluationDate', label: 'Fecha de evaluación', visibility: 'hidden', group: 'more', widthClass: 'w-[200px]' },
  { key: 'evaluationUser', label: 'Usuario de evaluación', visibility: 'hidden', group: 'more', widthClass: 'w-[220px]' },
  { key: 'approvalDate', label: 'Fecha de aprobación', visibility: 'hidden', group: 'more', widthClass: 'w-[200px]' },
  { key: 'approvalUser', label: 'Usuario de aprobación', visibility: 'hidden', group: 'more', widthClass: 'w-[220px]' },
];

const recordColumns: DocumentsRecordsColumn[] = [
  { key: 'secuencia', label: 'Sec.', visibility: 'visible', group: 'default', widthClass: 'w-[90px]' },
  { key: 'fechaOperacion', label: 'F. operación', visibility: 'visible', group: 'default', widthClass: 'w-[130px]' },
  { key: 'numeroCuenta', label: 'Cuenta bancaria · Número', visibility: 'visible', group: 'default', widthClass: 'w-[240px]' },
  { key: 'monedaCodigo', label: 'Cuenta bancaria · Moneda', visibility: 'visible', group: 'default', widthClass: 'w-[110px]' },
  { key: 'movimiento', label: 'Movimiento', visibility: 'visible', group: 'default', widthClass: 'w-[260px]' },
  { key: 'importeCuenta', label: 'Libro bancos · Imp. M. cuenta', visibility: 'visible', group: 'default', widthClass: 'w-[190px]', align: 'right' },
  { key: 'importeNacional', label: 'Libro bancos · Imp. M. nacional', visibility: 'visible', group: 'default', widthClass: 'w-[200px]', align: 'right' },
  { key: 'status', label: 'Estado de registro', visibility: 'visible', group: 'default', widthClass: 'w-[150px]', kind: 'record-status' },
  { key: 'numeroDocumento', label: 'Documentos · Número', visibility: 'visible', group: 'default', widthClass: 'w-[180px]' },
  { key: 'descripcionDocumento', label: 'Documentos · Descripción', visibility: 'visible', group: 'default', widthClass: 'w-[260px]' },
];

const fieldsMenuOptions: DocumentsRecordsMenuOption[] = [
  { label: 'Documento' },
  { label: 'Tipo de acción' },
  { label: 'Estado' },
  { label: 'Fecha de registro', hasChildren: true },
  { label: 'Entidad' },
];

const filterCampoOptions: DocumentsRecordsFilterOption[] = [
  { label: 'Documento', value: 'document' },
  { label: 'Número', value: 'number' },
  { label: 'Tipo de acción', value: 'actionType' },
  { label: 'Estado', value: 'status' },
  { label: 'Fecha', value: 'date' },
  { label: 'Entidad', value: 'entity' },
];

const filterValorOptions: DocumentsRecordsFilterOption[] = [
  { label: ESTADO.ELABORADO, value: ESTADO.ELABORADO },
  { label: ESTADO.VERIFICADO, value: ESTADO.VERIFICADO },
  { label: ESTADO.APROBADO, value: ESTADO.APROBADO },
  { label: 'Creación', value: 'Creación' },
];

export const CUENTAS_BANCARIAS_DOCUMENTS_CONFIG: DocumentsRecordsConfig = {
  title: 'Documentos de saldos iniciales',
  processId: PROCESS_ID,
  defaultRequestRoute: REQUEST_ROUTE,
  createDocumentOptions: CREATE_DOCUMENT_OPTIONS,
  breadcrumbs: buildProcessBreadcrumbs(PROCESS_ID, PROCESS_ROUTE),
  documentRows: [],
  recordRows: [],
  documentColumns,
  recordColumns,
  documentTableMinWidthClass: 'min-w-[2200px]',
  recordTableMinWidthClass: 'min-w-[2100px]',
  recordActionIcons: ['description', 'calculate'],
  recordTrackKey: 'recordId',
  recordHistoryDocumentLabel: 'Saldos iniciales',
  // El historial de un registro es el de la solicitud que lo creó.
  recordHistoryKind: 'documento',
  statusFilterOptions: [ESTADO.ELABORADO, ESTADO.VERIFICADO, ESTADO.OBSERVADO, ESTADO.APROBADO, ESTADO.RECHAZADO],
  actionTypeFilterOptions: ['Creación'],
  filterCampoOptions,
  filterValorOptions,
  fieldsMenuOptions,
  recordFilter1Label: 'Estado',
  recordFilter1Key: 'status',
  recordFilter1Options: ['Activo', 'Inactivo'],
  recordFilter2Label: 'Moneda',
  recordFilter2Key: 'moneda',
  recordFilter2Options: ['Soles', 'Dólares'],
  recordFilterCampoOptions: [
    { label: 'Estado', value: 'status' },
    { label: 'Banco', value: 'banco' },
    { label: 'Moneda', value: 'moneda' },
  ],
  recordFilterValorOptions: [
    { label: 'Activo', value: 'Activo' },
    { label: 'Inactivo', value: 'Inactivo' },
    { label: 'Soles', value: 'Soles' },
    { label: 'Dólares', value: 'Dólares' },
  ],
};
