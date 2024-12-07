import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PricesComponent } from '../../core/components/organisms/prices/prices.component';
import { RecomendationsComponent } from '../../core/components/organisms/recomendations/recomendations.component';
import { ContactComponent } from '../../core/components/organisms/contact/contact.component';
import { SkillsComponent } from '../../core/components/organisms/skills/skills.component';
import { JobCardComponent } from '../../core/components/molecules/job-card/job-card.component';
import { JobInterface, jobs } from './store/job.store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PricesComponent,
    RecomendationsComponent,
    ContactComponent,
    SkillsComponent,
    JobCardComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent implements OnInit {
  public jobsData: JobInterface[] = [
    {
      skilSets: ['angular 18', 'Tailwild', 'SSO'],
      companyName: 'Procetti',
      timePeriod: 'Agosto. 2024 - Actualidad',
      title: 'Desarrollador de front-end angular',
      description: [
        `
       Reorganización de la Estructura del Proyecto: Creación de carpetas específicas para cada tipo de archivo, incluyendo páginas, guards, enums, interfaces, helpers, componentes, pipes y servicios. Esto ha permitido una mayor claridad y eficiencia en la gestión del código.



        `,
        `
        Eliminación de Código Repetido: He optimizado el rendimiento de la aplicación al eliminar código redundante, lo que resultó en una mejora significativa en la estabilidad y la eficiencia general del proyecto.`,
        `Refactorización de Interfaces y Métodos: Renombré y estructuré interfaces, enums, constantes, métodos y funciones para asegurar que cada uno tenga una única responsabilidad, organizándolos en archivos más específicos.
`,
      ],
      socialMedia: ['https://www.linkedin.com/company/proceti'],
    },

    {
      skilSets: ['angular', 'Tailwild', 'Jira'],
      companyName: 'Neoris',
      timePeriod: '2 años abr. 2022 - mar. 2024',
      title: 'Desarrollador de front-end angular',
      description: [
        `
        Participé más de un año en Cemex como Desarrollador
        frontend encargado de implementar nuevas características y
        mejoras para el área de cemento, colabore en nuevas
        características para UK, GB Y CZ en el proceso de envió de
        pedidos online. Para CZ cree la configuración base a
        manera de objetos que ya estaba predefinida, me apegue a
        los patrones que usaba el proyecto para el correcto
        funcionamiento y buenas prácticas de desarrollo,
        constantemente se le hacían pull a las historias de
        usuario para avanzar en el desarrollo.
        `,
        `
        Se trabajo sobre angular 7 y utilizando NGRX, usando
        actions, reducers, selectors y effects también se utilizó
        angular rxjs para la manipulación de la información.
        Considero es un proyecto robusto, muy configurable,
        adaptable y estable. Atendí bugs de desarrollo enfocados
        en el frontend para dichos países. Acostumbrado a usar el
        tablero Kanban, para el ágil flujo de las tareas y
        seguimiento de estas.`,
      ],
      socialMedia: ['https://www.linkedin.com/company/neoris'],
    },

    {
      skilSets: ['angular', 'bootstrap', 'gitlab', 'srum'],
      companyName: 'Nova Solutions Systems',
      timePeriod: 'nov 2021 - abril 2022',
      title: 'Desarrollador front end en Sr',
      description: [
        `
      Participé en el proyecto de Bursanet de Actinver, fue una migración del proyecto que estaba en AngularJs y se migro a angular 12, apoye creando el código base y agregando un widget dinámico que controlaba y monitoreaba ETFs y su cotización en la bolsa. desarrolle componentes y módulos y uso de servicios de angular. 

.
              `,
        `
             Trabajando en equipo y cédulas para mayor rendimiento. Uso de figma para revisión del diseño  y maquetación, gitlab para manejo de repositorios. Trabajando con los principios del desarrollo flexible Agile (SCRUM), para sprints cortos y mostrando resultados visibles, solida comprensión de los procesos de desarrollo.`,
      ],
      socialMedia: ['https://www.linkedin.com/company/novasolutionsystems/'],
    },

    {
      skilSets: ['angular', 'angular material', 'expressJs', 'nodeJs'],
      companyName: 'Relappro',
      timePeriod: 'octubre 2017 - septiembre 2021',
      title: 'Desarrollador front end',
      description: [
        `
       Apoye en el desarrollo desde cero, apoyando a crecer las ganancias
        de la empresa con el apoyo de un panel de administración, en mi
        caso trabaje del lado de frontend, el proyecto estaba relacionados a
        publicidad por medio de tags de Google y consistía en mantener
        toda la información de agencias, campañas, publishers, pagos,
        usuarios, sitios, proveedores, revenue, una lista negra de sitios,
        subir videos, facturación, gráficas y creación y manipulación de
        tags, todo el panel construido en angular y angular material en la
        v8. Actualmente sigue funcionando por si sola gracias al script
        construido en typescript que fuimos mejorando hasta llegar a la v5
        una versión estable y rápida
        `,
      ],
      socialMedia: ['https://www.linkedin.com/company/relap'],
    },
    {
      skilSets: ['PhP', 'symfony framework', 'Jira', 'twig'],
      companyName: 'Simetrical',
      timePeriod: 'marzo 2016 - octubre 2017',
      title: 'Desarrollador Web PHP',
      description: [
        `
        Participé más de un año en Cemex como Desarrollador
        frontend encargado de implementar nuevas características y
        mejoras para el área de cemento, colabore en nuevas
        características para UK, GB Y CZ en el proceso de envió de
        pedidos online. Para CZ cree la configuración base a
        manera de objetos que ya estaba predefinida, me apegue a
        los patrones que usaba el proyecto para el correcto
        funcionamiento y buenas prácticas de desarrollo,
        constantemente se le hacían pull a las historias de
        usuario para avanzar en el desarrollo.
        `,
        `
        Se trabajo sobre angular 7 y utilizando NGRX, usando
        actions, reducers, selectors y effects también se utilizó
        angular rxjs para la manipulación de la información.
        Considero es un proyecto robusto, muy configurable,
        adaptable y estable. Atendí bugs de desarrollo enfocados
        en el frontend para dichos países. Acostumbrado a usar el
        tablero Kanban, para el ágil flujo de las tareas y
        seguimiento de estas.`,
      ],
      socialMedia: ['https://www.linkedin.com/company/simdatagroup/'],
    },
    {
      skilSets: ['PHP', 'codeigniter framework', 'mysql', 'mvc', 'angularjs'],
      companyName: 'Efisense Interactive',
      timePeriod: 'Enero 2014 - abril 2015',
      title: 'Desarrollador PHP back end',
      description: [
        `
        Desarrollador de la parte visual de sitios y sistemas de la empresa,
        así como proponer alternativas en diseño de Interfaces y
        experiencia de usuario. Maquetación y diseño responsivo web para
        la visualización de múltiples dispositivos así como contar con
        conocimiento de material desing y Angular js`,
        `Desarrollador y programador web trabajando en diferentes
        proyectos de la empresa ofreciendo de igual manera soporte y
        asistencia en línea. Desarrollé módulos y actualizaciones de los
        sistemas existentes. Otorgue soporte y mantenimiento a los
        equipos que los clientes soliciten.`,
      ],
      socialMedia: ['https://www.linkedin.com/company/efisense/'],
    },
  ];
  ngOnInit(): void {
    jobs.set(this.jobsData);
  }
}
