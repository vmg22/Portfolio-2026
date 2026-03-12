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
    formData.append('description', data.description);
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-off-white/80 mb-1">Título</label>
                <input {...register('title', { required: true })} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white" />
              </div>
              <div>
                <label className="block text-sm font-bold text-off-white/80 mb-1">Categoría</label>
                <input {...register('category', { required: true })} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white" />
              </div>
              <div>
                <label className="block text-sm font-bold text-off-white/80 mb-1">Descripción</label>
                <textarea {...register('description', { required: true })} rows={3} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white resize-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-off-white/80 mb-1">Imagen (Archivo)</label>
                <input type="file" {...register('image', { required: true })} className="w-full text-off-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-off-white hover:file:bg-primary/80" />
              </div>
              <div>
                <label className="block text-sm font-bold text-off-white/80 mb-1">Tags (separados por coma)</label>
                <input {...register('tags')} placeholder="React, Node, MongoDB" className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white" />
              </div>
              <div>
                <label className="block text-sm font-bold text-off-white/80 mb-1">Link del Proyecto</label>
                <input {...register('link')} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white" />
              </div>
               <div>
                <label className="block text-sm font-bold text-off-white/80 mb-1">Tamaño en Grid</label>
                <select {...register('type')} className="w-full bg-background-dark border border-accent-light/10 rounded-xl p-3 text-off-white">
                  <option value="small">Pequeño</option>
                  <option value="large">Grande (Destacado)</option>
                </select>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-primary hover:bg-primary/80 text-off-white font-bold py-4 rounded-xl shadow-lg transition-all disabled:opacity-50"
              >
                {status === 'loading' ? 'Subiendo...' : 'Guardar Proyecto'}
              </button>
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
