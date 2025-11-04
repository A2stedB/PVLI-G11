# **PVLI G11**

# **Documento de diseño PVLI**

[1.Resumen](#Resumen)

[2\. Concepto del juego](#2.-concepto-del-juego)

[2.1 Descripción General](#2.1-descripción-general)

[2.2 Género](#2.2-género)

[2.3 Pilares de Diseño](#2.3-pilares-de-diseño)

[2.4 Experiencia de Juego Deseada](#2.4-experiencia-de-juego-deseada)

[3\. Narrativa y Contexto (esto es antiguo ya)](#3.-narrativa,-contexto-y-estética-\(esto-es-antiguo-ya\))

[**4\. Gameplay**](#4.-gameplay)

[4.1 Requisitos Mínimos](#4.1-requisitos-mínimos)

[4.2 Condiciones de Victoria](#4.2-condiciones-de-victoria)

[4.3 estructura de Turno (Core Loop)](#4.3-estructura-de-turno-\(core-loop\))

[**5\. Mecánicas**](#5.-mecánicas)

[5.1 El Tablero de Juego](#5.1-el-tablero-de-juego)

[5.1.1 Estructura](#5.1.1-estructura)

[5.1.2 Elementos en el Mapa](#5.1.2-elementos-en-el-mapa)

[5.2 Sistema de Orientación](#5.2-sistema-de-orientación)

[5.3 Sistema de Movimiento](#5.3-sistema-de-movimiento)

[5.4 Sistema de Combate](#5.4-sistema-de-combate)

[5.4.1 Disparo Normal (Cañones)](#5.4.1-disparo-normal-\(cañones\))

[5.4.2 Ataque Aéreo (Bombardeo)](#5.4.2-ataque-aéreo-\(bombardeo\))

[5.5 Sistema de Vida](#5.5-sistema-de-vida)

[5.6 Sistema de Recursos](#5.6-sistema-de-recursos)

[//5.7 Obstáculos en el mapa](#//5.7-obstáculos-en-el-mapa)

[5.8 Dragon (NPC)](#5.8-dragon-\(npc\))

[**6\. Sistemas del Juego**](#6.-sistemas-del-juego)

[6.1 Sistema de Visión](#6.1-sistema-de-visión)

[6.2 Sistema de Mapa Anotable](#6.2-sistema-de-mapa-anotable)

[6.3 Sistema de Cierre de Zona](#6.3-sistema-de-cierre-de-zona)

[**7\. Interfaz y Controles**](#7.-interfaz-y-controles)

[7.1 Pantalla Dividida](#7.1-pantalla-dividida)

[7.2 Vista de Interfaz](#7.2-vista-de-interfaz)

[7.2.1 Vista Principal (3 Ventanas)](#7.2.1-vista-principal-\(3-ventanas\))

[7.2.2 Vista de Mapa Completo](#7.2.2-vista-de-mapa-completo)

[7.2.3 Vista de Selección de Ataque Normal](#7.2.3-vista-de-selección-de-ataque-normal)

[7.2.4 Vista de Selección de Ataque Aéreo](#7.2.4-vista-de-selección-de-ataque-aéreo)

[7.3 HUD (Heads-Up Display)](#7.3-hud-\(heads-up-display\))

[7.5 Controles](#7.5-controles)

[7.5 Menú principal](#7.5-menú-principal)

[**8\. Ejemplo de una partida**](#8.-ejemplo-de-una-partida)

[8.1 Inicio](#8.1-inicio)

[8.2 Progresión detallada de un turno](#8.2-progresión-detallada-de-un-turno)

[8.3 Fin de la partida](#8.3-fin-de-la-partida)

[**9\. En desuso**](#9.-en-desuso)

[**9.1 Ideas para limitar el tiempo de juego**](#9.1-ideas-para-limitar-el-tiempo-de-juego)

[**9.2 Posibles detalles**](#9.2-posibles-detalles)

[**10\. Enlace**](#11.-enlace)

<a id="Resumen"></a>
# **1.Resumen**


**Título del juego:** \[POR DEFINIR \- Opciones: "Deep Tactics", "Submarine Duel", "Bajo Presión"\]

**Concepto principal:** Juego multijugador local de estrategia por turnos donde dos jugadores controlan submarinos en un tablero de casillas. La característica principal es la información asimétrica: cada jugador solo puede ver su entorno inmediato (frontal y laterales), creando un intenso juego de deducción psicológica y anticipación de movimientos.

**Plataforma:** Navegador web 

**Número de jugadores:** 2 jugadores (local)

**Duración estimada de partida:** 10-20 minutos

**Objetivo de victoria:**

* Ser el último submarino operativo  
* Alcanzar la casilla de salida designada

# **2.Concepto del juego**

### **2.1 Descripción General**

Los jugadores asumen el rol de capitanes de submarinos en una batalla táctica submarina. La limitación de visión y la información oculta sobre la posición enemiga convierten cada partida en un duelo psicológico donde la deducción, el engaño y la planificación estratégica son fundamentales.

### **2.2 Género**

* **Género principal:** Estrategia por turnos  
* **Subgénero:** Juego de información asimétrica/oculta  
* **Estilo:** Multijugador local competitivo

### 

### **2.3 Pilares de Diseño**

1. **Visión Limitada:** Los jugadores solo ven tres direcciones (frontal, lateral izquierda, lateral derecha), nunca su espalda ni una vista general del tablero durante su turno de acción.  
2. **Información Asimétrica:** Cada jugador conoce únicamente su propio estado (vida, munición, cooldowns) y lo que puede observar directamente. Debe deducir la posición y estado del enemigo.  
3. **Deducción y Engaño:** El corazón del juego está en inferir la ubicación enemiga mediante sus acciones (ataques aéreos, movimientos deducidos) y en crear patrones de movimiento impredecibles.  
4. **Múltiples Caminos a la Victoria:** Los jugadores pueden ganar destruyendo al enemigo o alcanzando su zona de escape, creando dilemas estratégicos.  
5. **Rejugabilidad:** La información oculta hace cada partida única

### 

### **2.4 Experiencia de Juego Deseada**

Los jugadores deben sentir:

* **Tensión constante** al no saber dónde está exactamente el enemigo  
* **Satisfacción intelectual** al deducir correctamente la posición del oponente  
* **Momentos dramáticos** cuando se encuentran cara a cara inesperadamente  
* **Dilemas tácticos** entre ser agresivo o cauteloso, entre atacar o huir hacia la salida

# **3\. Narrativa, Contexto y Estética (esto es antiguo ya)**
China y Japón se enfrentan en una dura guerra de la cual tú formas parte como timonel de un submarino. La única información que tienes sobre la posición de tus adversarios es tu vista frontal, lateral derecha y lateral izquierda de las profundidades marinas. Tendrás la posibilidad de realizar anotaciones en un mapa compuesto por hexágonos, moviéndote de

vértice a vértice, para posteriormente comunicar las coordenadas a la torre de control en las que quieres disparar munición.

### **3.1 Estilo gráfico**

	Se usarán unos gráficos pseudo 3D como en Myst. Modelos 3D hechos en Blender pero se usarán fotografías de estos como sprites y spritesheets.

# **4\. Gameplay**

### **4.1 Requisitos Mínimos**

* 2 jugadores físicamente presentes  
* 1 ordenador con navegador web moderno  
* Pantalla compartida (ambos jugadores tienen que ser capaces de ver la misma pantalla)

### 

### **4.2 Condiciones de Victoria**

Un jugador gana cuando:

1. **Victoria por eliminación:** El submarino enemigo es destruido (vida llega a 0\)  
2. **Victoria por escape:** Alcanza su zona de salida en el mapa

### 

### **4.3 estructura de Turno (Core Loop)**

**Por turno, cada jugador:**

1. Puede consultar el mapa completo en cualquier momento  
2. Decide si moverse (y en qué dirección)  
3. Decide si atacar (disparo normal o ataque aéreo, si está disponible) o recoger un recurso  
4. Puede hacer anotaciones en el mapa para estrategia futura

**Una ronda se completa cuando ambos jugadores han realizado su turno.**

**Progresión detallada de un turno:**

Cada turno de un jugador sigue esta secuencia:

**Fase 1: Consulta de Información**

* El jugador puede consultar el **mapa completo anotable** siempre que estés en tu trono  
* Este mapa muestra el tablero completo con anotaciones propias, pero NO la posición del enemigo  
* Sirve para orientarse y recordar información deducida en turnos anteriores

**Fase 2: Movimiento (Obligatorio decidir)**

El jugador debe elegir una de estas opciones:

* **Permanecer quieto** en su posición actual  
* **Moverse hacia adelante:** Avanza una casilla manteniendo su orientación  
* **Moverse lateral izquierdo:** Avanza una casilla hacia la izquierda Y rota su orientación 90° a la izquierda  
* **Moverse lateral derecho:** Avanza una casilla hacia la derecha Y rota su orientación 90° a la derecha

**Importante:** No existe movimiento hacia atrás. El submarino siempre mira hacia adelante.

**Fase 3: Ataque y Recolección (Opcional)**

Después de moverse, el jugador puede decidir si atacar o recoger un recurso:

* **Disparo Normal (Cañones):** Si tiene munición  
* **Ataque Aéreo (Bombardeo):** Si el cooldown ha terminado, puede marcar cualquier casilla del mapa  
* **Recoger recurso:** No sabes cuál es hasta que lo coges

**Fase 4: Fin del Turno**

* Se muestra feedback de las acciones realizadas, pero no de ninguna coordenada exacta  
* Pasa el turno al siguiente jugador

**Nota:** Una **ronda** se completa cuando ambos jugadores han realizado su turno. Los efectos de ataques aéreos se resuelven al final de cada ronda.

# **5\. Mecánicas**

### **5.1 El Tablero de Juego**

#### **5.1.1 Estructura**

* **Tipo:** Cuadrícula de casillas cuadradas  
* **Tamaño sugerido:** 10x10 casillas **\[POR DEFINIR\]**  
* **Límites:** El mapa tiene bordes sólidos; no se puede salir de la zona de juego  
* **Movimiento:** Los submarinos se mueven de vértice a vértice entre casillas (cada vértice representa una posición válida)

#### **5.1.2 Elementos en el Mapa**

**Zonas de Salida (2 en total, una por jugador):**

* Cada jugador tiene su propia zona de salida  
* Ubicación: En lados opuestos del mapa para mantener equidad, siempre en las esquinas opuestas a la esquina donde inicias  
* Condición: Al alcanzar tu zona de salida, ganas instantáneamente  
* Visibilidad: Ambas zonas son visibles en el mapa completo para ambos jugadores

**Recursos Dispersos:** Los recursos aparecen en casillas específicas del mapa y se recogen automáticamente al pasar por encima:

1. **Reductor de Cooldown Aéreo**   
   * Reduce 1 turno el tiempo de espera del próximo ataque aéreo  
2. **Limitador de Movimiento Enemigo**   
   * Al usarse: El oponente solo puede moverse en dos direcciones durante su próximo turno (frontal \+ una lateral aleatoria)  
   * Uso: Manual desde el inventario  
3. **Kit de Reparación**   
   * Restaura **\[POR DEFINIR: 25-50 HP\]**  
   * Uso: Automático al recogerlo si estás dañado, o se almacena para uso manual posterior

### 

### **5.2 Sistema de Orientación**

* El submarino siempre mira hacia una de las **cuatro direcciones cardinales**: Norte, Sur, Este u Oeste  
* La orientación determina qué ve el jugador y hacia dónde puede disparar  
* **Rotar orientación:**  
  * Movimiento frontal: NO cambia orientación  
  * Movimiento lateral (izquierdo/derecho): Rota automáticamente 90° en esa dirección

**Ejemplo:**

* Submarino mirando al Norte  
* Jugador elige moverse lateral derecho  
* Resultado: El submarino se mueve una casilla hacia el Este Y ahora mira hacia el Este

### 

### **5.3 Sistema de Movimiento**

Cada turno, el jugador puede:

* **Quedarse quieto** en su posición actual  
* **Moverse una casilla** hacia adelante, lateral izquierdo o lateral derecho

**Restricciones:**

* No se puede salir de los límites del mapa  
* **\[POR DEFINIR\]** Qué ocurre si dos submarinos intentan ocupar el mismo espacio:  
  * Opción A: El movimiento se bloquea  
  * Opción B: Ambos submarinos son destruidos  
  * Opción C: Se decide aleatoriamente quién sobrevive  
  * Opción D: Se activa un mini-juego de combate cuerpo a cuerpo (o otro tipo de minijuego)

### 

### **5.4 Sistema de Combate**

#### **5.4.1 Disparo Normal (Cañones)**

**Características:**

* **Alcance:** 2 alcances, 1 casilla o 2, en la dirección frontal del submarino  
* **Ejecución:** Instantánea tras seleccionar el punto de impacto  
* **Frecuencia:** Disponible cada turno (sin cooldown)  
* **Munición:** 1 por cada turno  
* **Daño:** **\[PARÁMETRO POR DEFINIR\]** (ej. 25 HP) pero el de menos alcance tiene más daño que el de más alcance

**Mecánica de Selección:**

* El jugador ve un overlay en su vista frontal mostrando el área de ataque  
* Puede seleccionar cualquier vértice dentro de las dos distancias  
* El daño se aplica si hay un submarino enemigo en ese vértice

**Ventajas:**

* Sin restricciones de uso  
* Feedback inmediato  
* No hay daño colateral

**Desventajas:**

* Alcance muy limitado  
* Requiere saber/deducir la posición enemiga con precisión  
* Solo frontal (vulnerable por los flancos y espalda)

#### 

#### **5.4.2 Ataque Aéreo (Bombardeo)**

**Características:**

* **Alcance:** Cualquier casilla del mapa completo  
* **Área de efecto:** Los cuatro vértices de la casilla seleccionada  
* **Ejecución:** Se ejecuta al **final de la ronda**, después de que ambos jugadores hayan completado sus turnos  
* **Frecuencia:** 3 turnos de cooldown. Al principio de la partida el ataque aéreo está desactivado por 2 turnos  
* **Daño:** **\[PARÁMETRO POR DEFINIR\]** (ej. 40 HP)  
* **Daño propio:** SÍ \- también te afecta si estás en el área de efecto

**Mecánica de Selección:**

* El jugador abre el mapa completo  
* Selecciona una casilla objetivo  
* Se marca con un indicador temporal  
* Al final de la ronda, explota en esa ubicación

**Ventajas:**

* Alcance ilimitado  
* Área de efecto (mayor probabilidad de impacto)  
* Útil para controlar zonas o forzar movimiento enemigo

**Desventajas:**

* Cooldown largo entre usos  
* Ejecución retrasada (el enemigo puede moverse antes de que impacte)  
* Puede dañarte a ti mismo si calculas mal  
* Revela tu estrategia al enemigo (deduce dónde crees que está)

### 

### **5.5 Sistema de Vida**

**\[POR DEFINIR\]**

**Sistema de Daño con Fugas**

* Vida inicial: 100 HP  
* Los disparos causan daño inmediato Y crean fugas progresivas  
* Las fugas causan \[X HP por turno\] adicional  
* Los kits de reparación detienen las fugas y restauran HP  
* Añade presión temporal y gestión de recursos  
* Sistema de fugas: "Los disparos causan fugas, tienes X tiempo para arreglarlo"  
  * ¿Cómo funciona exactamente? ¿Daño progresivo? ¿Turno perdido para reparar?

### **5.6 Sistema de Recursos**

Los jugadores pueden recoger recursos moviéndose sobre ellos:

1. **Reductor de Cooldown Aéreo**  
   * Reduce el tiempo de espera para el próximo ataque aéreo  
2. **Limitador de Movimiento Enemigo**  
   * Al usarse, el oponente solo puede moverse en dos direcciones durante su próximo turno  
3. **Munición Extra** *(si se implementa munición limitada)*  
   * Incrementa los disparos disponibles  
4. **Materiales de reparación del submarino**  
   * Repara el submarino

Los materiales son visibles en el mapa, más el tipo de recurso no lo es, todos son iguales de aspecto en el mapa:

* Cuando se coge se asigna de forma random el tipo de recurso 

//O

* Cuando se coge se puede craftear el tipo de recurso que quieras

**\[POR DEFINIR\]**

* Cantidad de cada recurso en el mapa  
* Si reaparecen tras ser recogidos  
* Si hay diferentes tipos de materiales para arreglar un submarino dañado, que cada uno recupere x cantidad de vida, o todos recuperan lo mismo, y cuanto recuperarían.

### **//5.7 Obstáculos en el mapa**

En el mapa puede haber obstáculos, que pueden ocupar casillas (los cuatro vértices) o un solo vértice.  
Los obstáculos son visibles en el mapa general, los jugadores pueden consultarlo en su turno.

Si el submarino choca con un obstáculo  
Si un disparo normal acierta un obstáculo destruye el obstáculo?  
Si un ataque aéreo acierta un obstáculo destruye el obstáculo?

### 

### **5.8 Dragon (NPC)**

**Concepto:** Un elemento neutral que se mueve por el mapa siguiendo una ruta predefinida.

**Características:**

* **Comportamiento:** Sigue una ruta circular o en patrón específico por el mapa  
* **Función:** Repara submarinos dañados que se encuentre en su camino  
* **Cantidad de reparación:** **\[POR DEFINIR: 30-40 HP?\]**  
* **Velocidad:** Se mueve 1 casilla cada **\[POR DEFINIR: 2-3 turnos?\]**  
* **Visibilidad:** Solo visible cuando está en tu campo de visión

**Implicación Estratégica:**

* Los jugadores pueden planear rutas para interceptar al dragón  
* Crea puntos de encuentro predecibles donde ambos submarinos pueden coincidir  
* Añade una capa adicional de gestión de riesgo/recompensa

**\[POR DEFINIR \- IMPORTANTE\]**

* Ruta exacta del dragón en el tablero  
* ¿Es completamente predecible o tiene elementos aleatorios?  
* ¿Qué pasa si ambos submarinos están en la ruta del dragón al mismo tiempo?


# **6\. Sistemas del Juego**

### **6.1 Sistema de Visión**

**Visión Limitada del Submarino:**

Cada jugador ve únicamente tres "ventanas" que representan su campo de visión:

1. **Vista Frontal (Central):** Lo que hay directamente adelante  
2. **Vista Lateral Izquierda:** Lo que hay a la izquierda  
3. **Vista Lateral Derecha:** Lo que hay a la derecha

**Importante:** NUNCA se ve lo que hay detrás del submarino.

**¿Qué se muestra en cada ventana?**

* Casillas vacías (agua oscura)  
* Submarino enemigo (si está en esa dirección)  
* Recursos en el suelo  
* Límites del mapa  
* Dragón reparador

**Alcance visual:**  2 casillas, de delante y de los laterales, todas rectas, ninguna diagonal

### 

### **6.2 Sistema de Mapa Anotable**

Cada jugador tiene acceso a un **mapa completo del tablero** que puede consultar en cualquier momento durante su turno.

**Características del Mapa:**

**Información mostrada por defecto:**

* Estructura completa del tablero (todas las casillas)  
* Límites del mapa  
* Zonas de salida (ambas)  
* Recursos visibles, pero todos iguales

**Información NO mostrada:**

* Posición actual del enemigo y la tuya  
* Movimientos del enemigo  
* Estado del enemigo (vida, recursos)

**Sistema de Anotaciones:** Los jugadores pueden hacer **marcas personales** en el mapa:

* Marcar casillas con colores diferentes  
* Añadir símbolos (ejemplo: "enemigo visto aquí", "peligro", "objetivo")  
* Estas anotaciones son públicas ya que la pantalla se comparte  
* Persisten entre turnos

**Propósito estratégico:**

* Recordar dónde se vio al enemigo la última vez  
* Triangular posible posición enemiga según ataques aéreos recibidos  
* Planificar rutas de movimiento  
* Marcar zonas peligrosas o estratégicas

### 

### **6.3 Sistema de Cierre de Zona**

Para evitar partidas eternas y forzar el enfrentamiento:

**Mecánica:**

* A partir del turno **\[POR DEFINIR: Ej. turno 15-20\], O**  a partir de **X \[POR DEFINIR: Ej. turno 10-15\]**  turnos sin enfrentamientos, el mapa comienza a cerrarse, antes de esto los jugadores recibirán un warning de que en **X** turnos el mapa se reducirá.  
* Cada **\[POR DEFINIR: 2-3 turnos\]**, una fila o columna exterior del tablero se vuelve inaccesible  
* Los submarinos no pueden entrar en zonas cerradas  
* Si un submarino se queda atrapado en una zona que se cierra, recibe **\[POR DEFINIR: 20-30 HP de daño\]** por turno hasta moverse

**Patrón de cierre:** 

* Cierre simétrico toda la fila exterior se vuelve inaccesible, la casilla de salida se reubica con el cierre poniéndose en el mismo sitio pero en el espacio reducido.

![image9.jpg (1999×1172)](https://raw.githubusercontent.com/A2stedB/PVLI-G11/8ec30b404dcf98a054692907836a1d144d89ee0f/Documentacion/images/image9.jpg)

**Tamaño mínimo:** El mapa NO puede reducirse más allá de **\[POR DEFINIR: 4x4 casillas\]**

# 

# **7\. Interfaz y Controles**

### **7.1 Pantalla Dividida**

**Filosofía de diseño:** Toda la información se muestra en una sola pantalla física dividida en dos mitades (una por jugador).

**Entre turnos:**

* Pantalla de transición: "Turno de Jugador X \- Presiona cualquier tecla"

### 

### **7.2 Vista de Interfaz**

#### **7.2.1 Vista Principal (3 Ventanas)**

**Ventana Central (Frontal) \- La más grande:**

* Muestra lo que hay directamente adelante  
* Alcance: \[2-3\] casillas de profundidad  
* Aquí aparecen enemigos, recursos, límites

**Ventanas Laterales (Izquierda y Derecha):**

* Más pequeñas que la frontal  
* Muestran vistas perpendiculares  
* Mismo alcance que la frontal

**Estilo visual:**

![image3.jpg (1999×1500)](https://raw.githubusercontent.com/A2stedB/PVLI-G11/8ec30b404dcf98a054692907836a1d144d89ee0f/Documentacion/images/image3.jpg)

![image2.jpg (1999×1500)](https://raw.githubusercontent.com/A2stedB/PVLI-G11/8ec30b404dcf98a054692907836a1d144d89ee0f/Documentacion/images/image2.jpg)

#### 

#### **7.2.2 Vista de Mapa Completo**
* **Activación:** Botón "Mapa" o tecla \[M\]

**Funcionalidades:**

* Click en casillas para añadir/quitar anotaciones  
* Selector de tipo de marca (colores, símbolos)  
* Borrador de anotaciones

![image13.jpg (1999×1500)](https://raw.githubusercontent.com/A2stedB/PVLI-G11/refs/heads/main/Documentacion/images/image13.jpg)

####

#### **7.2.3 Vista de Selección de Ataque Normal**

**Activación:** Botón "Atacar \- Cañones" durante fase de ataque

**Muestra:**

* Overlay sobre la vista frontal  
* Rectángulo de 2x4 casillas iluminado mostrando alcance  
* Cursor para seleccionar punto de impacto específico  
* Feedback visual si hay objetivo válido en el área

![image10.png (1999×1500)](https://raw.githubusercontent.com/A2stedB/PVLI-G11/refs/heads/main/Documentacion/images/image10.png)


#### **7.2.4 Vista de Selección de Ataque Aéreo**

**Activación:** Botón "Atacar \- Bombardeo" durante fase de ataque (si cooldown completado)

**Muestra:**

* Mapa completo con overlay  
* Cursor para seleccionar casilla objetivo  
* Previsualización del área de efecto (4 vértices de la casilla)  
* Advertencia si tu propia posición está en el área de efecto

![image4.png (1999×1500)](https://raw.githubusercontent.com/A2stedB/PVLI-G11/refs/heads/main/Documentacion/images/image4.png)


### **7.3 HUD (Heads-Up Display)**
**Elementos permanentes en pantalla:**

**Barra de Vida:**

Vida: ████████░░░ 80/100 HP

**Contadores**

Contador general de turnos: por cada turno realizado se suma uno 

Contador reducción de mapa: es el contador general de turnos menos la cantidad de turnos sin ataque directo

Contador de bombas aéreas: sólo activas

**Estado de Ataque Aéreo:**

Bombardeo: Cooldown 2 turnos

// O

Bombardeo: DISPONIBLE

**Inventario de Recursos:**

Recursos: \[Herramientas x2\] \[Limitadores demovimiento x1\] \[Reductor de cooldown x0\]

**Indicador de Orientación:**

Mirando hacia: ⬆ NORTE

**\[POR DEFINIR\]**

* ¿Minimap permanente en esquina? (probablemente NO, para mantener información limitada)  
* ¿Indicador de turno actual / número de ronda?  
* ¿Historial de eventos últimos turnos?

### 

### **7.5 Controles**

**\[POR DEFINIR \- CRÍTICO para implementación\]**

**Propuesta A \- Control por Teclado:**

**Jugador 1:**

* Movimiento: W (adelante), A (lateral izq), D (lateral der), S (quieto)  
* Atacar cañones: Espacio  
* Atacar aéreo: Q  
* Abrir mapa: Tab  
* Confirmar selección: Enter

**Jugador 2:**

* Movimiento: Flechas (↑ adelante, ← lateral izq, → lateral der, ↓ quieto)  
* Atacar cañones: Num0  
* Atacar aéreo: Num1  
* Abrir mapa: Num2  
* Confirmar selección: NumEnter

**Propuesta B \- Control por Ratón:**

* Todo mediante clicks en botones en pantalla  
* Más intuitivo para no-gamers  
* Permite jugar en tablets/móviles en el futuro

**Propuesta C \- Híbrido:**

* Movimiento y acciones principales: Teclado  
* Selecciones en mapa: Ratón

### 

### **7.5 Menú principal**
**\[POR DEFINIR \- "como se ve el menú"\]**

Propuesta de opciones:

* **Nueva Partida**  
  * Seleccionar número de jugadores  
  * Configurar reglas opcionales  
* **Reglas del Juego**  
* **Créditos**  
* **Salir**

# 

# **8\. Ejemplo de una partida**

### **8.1 Inicio**

Los jugadores colocan su submarino en el mapa, el otro jugador no debe saber la posición de donde está colocado. Tras colocar ambos el submarino se elige aleatoriamente quien empieza el turno.

### 

### **8.2 Progresión detallada de un turno**

En cualquier momento del turno podrás abrir el mapa para orientarte. En tu pantalla se

mostrará la munición de daño singular de la que dispones (cañones) y la comunicación con la torre de control. Lo primero que harás es decidir si moverte y, de ser así, en qué dirección.

Una vez completada esta fase, si avistas a otro jugador y tienes armas del suficiente alcance podrás decidir si dispararle. A su vez puedes planear ataques aéreos desde la torre de control a casillas en específico.

Una ronda se da por finalizada cuando ambos jugadores han realizado su turno.

### 

### **8.3 Fin de la partida**

Una partida llega a su fin cuando solo queda un submarino en pie, o un jugador ha alcanzado el objetivo para ganar  
 

# **9\. En desuso**

### **9.1 Ideas para limitar el tiempo de juego**

Motivar los jugadores a enfrentarse con objetos en el mapa, por ejemplo más munición extra, o objeto que permite saber la ubicación actual no exacta del rival.

La zona del juego va cerrando con el paso de turno, por ejemplo a partir del turno 10 de una partida empieza a disminuir el tamaño del mapa cada 2 turnos hasta un tamaño mínimo.

Establecer una “salida” para ambos como otro objetivo para conseguir la victoria, o otros objetivos para conseguir la victoria.

### **9.2 Posibles detalles**

En el mapa puede haber obstáculos, que incrementa un poco la jugabilidad para que no sea tan aburrido.

Anticipar ataque para turnos posteriores

¿Qué pasa si ambos chocan entre sí?

# **10\. Prueba en papel** 

![image6.jpg (1999×1500)](https://raw.githubusercontent.com/A2stedB/PVLI-G11/refs/heads/main/Documentacion/images/image6.jpg)

# **11\. Enlace**

* **Repositorio:[A2stedB/PVLI-G11: PVLI Grupo 11](https://github.com/A2stedB/PVLI-G11)**  
* **Web: [Proyecto XI](https://a2stedb.github.io/PVLI-G11/)**  
* **Twitter:[x.com/DeepCodeStudio](https://x.com/DeepCodeStudio)**
