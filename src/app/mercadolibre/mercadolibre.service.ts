import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MercadolibreService {
  private static DETALLE_CATEGORIA_URL = "https://api.mercadolibre.com/categories/{0}/classifieds_promotion_packs";
  private static CATEGORIAS_URL = "https://api.mercadolibre.com/sites/MLA/categories";

  constructor(private http: Http) { }
  
   getDetalleCategoria(id: string): Promise<DetalleCategoria> {
     
    let url = StringFormat.Format(MercadolibreService.DETALLE_CATEGORIA_URL, id);
      return this.http.get(url)
     .toPromise()
     .then(response => response.json() as DetalleCategoria)
     .catch(this.handleError);
   }

  //OBTENER CATEGORIAS, DEVUELVE UNA PROMESA
  getCategorias(): Promise<Categorias[]> {
    return this.http.get(MercadolibreService.CATEGORIAS_URL)
      .toPromise()
      .then(response => response.json() as Categorias[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

export interface DetalleCategoria {
  id: string;
  category_id: string;
  brand: string;
  description: string;
  price: string;
 package_type: string;
  
  duration: string;
 status: string;
  
}

export interface Categorias {
  name: string;
  id: string;
}



export class StringFormat {
    public static Empty: string = "";

    public static isNullOrWhiteSpace(value: string): boolean {
        try {
            if (value == null || value == 'undefined')
                return false;

            return value.replace(/\s/g, '').length < 1;
        }
        catch (e) {
            return false;
        }
    }

    public static Format(value, ...args): string {
        try {
            return value.replace(/{(\d+(:.*)?)}/g, function (match, i) {
                var s = match.split(':');
                if (s.length > 1) {
                    i = i[0];
                    match = s[1].replace('}', '');
                }

                var arg = StringFormat.formatPattern(match, args[i]);
                return typeof arg != 'undefined' && arg != null ? arg : StringFormat.Empty;
            });
        }
        catch (e) {
            return StringFormat.Empty;
        }
    }

    private static formatPattern(match, arg): string {
        switch (match) {
            case 'L':
                arg = arg.toLowerCase();
                break;
            case 'U':
                arg = arg.toUpperCase();
                break;
            default:
                break;
        }

        return arg;
    }
}