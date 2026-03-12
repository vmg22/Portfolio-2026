import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FadeIn } from '../components/FadeIn';

export function Admin() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      const json = await res.json();
      if (json.success) setProjects(json.data);
    } catch (err) {
      console.error('Error fetching projects:', err);
    }
  };

  const onSubmit = async (data) => {
    setStatus('loading');
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('category', data.category);
    formData.append('role', data.role);
    formData.append('year', data.year);
    formData.append('team_size', data.team_size);
    formData.append('methodology', data.methodology);
    formData.append('impact', data.impact);
    formData.append('description', data.description);
    formData.append('challenge', data.challenge);
    formData.append('solution', data.solution);
    formData.append('modules', JSON.stringify(data.modules.split(',').map(m => m.trim())));
    
    const stack = {
      frontend: data.stack_frontend,
      backend: data.stack_backend,
      database: data.stack_database,
      tools: data.stack_tools
    };
    formData.append('stack_details', JSON.stringify(stack));
    
    formData.append('image', data.image[0]);
    formData.append('tags', JSON.stringify(data.tags.split(',').map(t => t.trim())));
    formData.append('link', data.link);
    formData.append('type', data.type);

    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        body: formData,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        reset();
        fetchProjects();
      } else {
        throw new Error(json.error);
      }
    } catch (err) {
      console.error('Error creating project:', err);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8 text-off-white">Panel de Administración</h1>
      </FadeIn>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Formulario */}
        <FadeIn delay={0.1}>
          <div className="bg-accent-deep/10 p-8 rounded-3xl border border-accent-light/5">
            <h2 className="text-2xl font-bold mb-6 text-off-white">Agregar Nuevo Proyecto</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-accent-light uppercase mb-1">Título</label>
                  <input {...register('title', { required: true })} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-accent-light uppercase mb-1">Categoría</label>
                  <input {...register('category', { required: true })} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-accent-light uppercase mb-1">Rol</label>
                  <input {...register('role')} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-accent-light uppercase mb-1">Año</label>
                  <input {...register('year')} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-accent-light uppercase mb-1">Tamaño Equipo</label>
                  <input {...register('team_size')} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-accent-light uppercase mb-1">Metodología</label>
                  <input {...register('methodology')} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-accent-light uppercase mb-1">Impacto (Resumen clave)</label>
                <textarea {...register('impact')} rows={2} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white text-sm resize-none" />
              </div>

              <div>
                <label className="block text-xs font-bold text-accent-light uppercase mb-1">Descripción</label>
                <textarea {...register('description', { required: true })} rows={3} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white text-sm resize-none" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-accent-light uppercase mb-1">Desafío</label>
                  <textarea {...register('challenge')} rows={3} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white text-sm resize-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-accent-light uppercase mb-1">Solución</label>
                  <textarea {...register('solution')} rows={3} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white text-sm resize-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-accent-light uppercase mb-1">Módulos (separados por coma)</label>
                <input {...register('modules')} placeholder="Gestión de inventario, Auth, Chatbot..." className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white text-sm" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-accent-light uppercase mb-1">Stack: Frontend</label>
                  <input {...register('stack_frontend')} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-accent-light uppercase mb-1">Stack: Backend</label>
                  <input {...register('stack_backend')} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-accent-light uppercase mb-1">Stack: DB</label>
                  <input {...register('stack_database')} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-accent-light uppercase mb-1">Stack: Tools</label>
                  <input {...register('stack_tools')} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-accent-light uppercase mb-1">Imagen (Archivo)</label>
                <input type="file" {...register('image', { required: true })} className="w-full text-off-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-off-white hover:file:bg-primary/80" />
              </div>

              <div>
                <label className="block text-xs font-bold text-accent-light uppercase mb-1">Tags (separados por coma)</label>
                <input {...register('tags')} placeholder="React, Node, MongoDB" className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white text-sm" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-accent-light uppercase mb-1">Link</label>
                  <input {...register('link')} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-accent-light uppercase mb-1">Grid Size</label>
                  <select {...register('type')} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white text-sm">
                    <option value="small">Pequeño (1 col)</option>
                    <option value="large">Grande (2 cols)</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-primary hover:bg-primary/80 text-off-white font-bold py-4 rounded-xl shadow-lg transition-all disabled:opacity-50 text-sm uppercase tracking-wider"
              >
                {status === 'loading' ? 'Subiendo...' : 'Guardar Proyecto'}
              </button>

              {status === 'success' && <p className="text-green-500 text-center text-sm">¡Proyecto guardado con éxito!</p>}
              {status === 'error' && <p className="text-red-500 text-center text-sm">Error al guardar. Revisa la consola.</p>}
            </form>
          </div>
        </FadeIn>

        {/* Lista de Proyectos */}
        <FadeIn delay={0.2}>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-off-white">Proyectos Actuales</h2>
            {projects.map((project) => (
              <div key={project._id} className="flex gap-4 p-4 rounded-2xl bg-accent-deep/20 border border-accent-light/10 items-center">
                <img src={project.image} alt={project.title} className="size-16 rounded-lg object-cover" />
                <div className="flex-grow">
                  <h3 className="font-bold text-off-white">{project.title}</h3>
                  <p className="text-xs text-off-white/60">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
